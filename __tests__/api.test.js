import { getGeolocation, fetchSunData, isDay } from '../src/utils/api';

describe('API Utilities', () => {
    beforeEach(() => {
        fetch.mockClear(); // Clear fetch mocks before each test
    });

    describe('fetchSunData', () => {
        it('fetches sunrise and sunset data successfully', async () => {
            const mockResponse = {
                results: {
                    sunrise: '06:00:00 AM',
                    sunset: '06:00:00 PM',
                },
            };

            fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => mockResponse,
            });

            const latitude = 37.7749;
            const longitude = -122.4194;
            const result = await fetchSunData(latitude, longitude);

            expect(result).toEqual(mockResponse.results);
            expect(fetch).toHaveBeenCalledWith(
                `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&formatted=1`
            );
        });

        it('throws an error if the API response is not ok', async () => {
            fetch.mockResolvedValueOnce({
                ok: false,
            });

            const latitude = 37.7749;
            const longitude = -122.4194;

            await expect(fetchSunData(latitude, longitude)).rejects.toThrow(
                'Failed to fetch sun data'
            );
        });
    });

    describe('getGeolocation', () => {
        it('resolves with latitude and longitude when geolocation is supported', async () => {
            const mockCoords = { latitude: 37.7749, longitude: -122.4194 };

            global.navigator.geolocation = {
                getCurrentPosition: jest.fn((success) => success({ coords: mockCoords })),
            };

            const result = await getGeolocation();
            expect(result).toEqual(mockCoords);
            expect(global.navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
        });
    });

    describe('isDay', () => {
        it('returns true for a time between sunrise and sunset', () => {
            const currentTime = '12:00:00'; // Noon
            const sunrise = '06:00:00'; // 6 AM
            const sunset = '18:00:00'; // 6 PM

            expect(isDay(currentTime, sunrise, sunset)).toBe(true);
        });

        it('returns false for a time before sunrise', () => {
            const currentTime = '05:00:00'; // 5 AM
            const sunrise = '06:00:00'; // 6 AM
            const sunset = '18:00:00'; // 6 PM

            expect(isDay(currentTime, sunrise, sunset)).toBe(false);
        });

        it('returns false for a time after sunset', () => {
            const currentTime = '19:00:00'; // 7 PM
            const sunrise = '06:00:00'; // 6 AM
            const sunset = '18:00:00'; // 6 PM

            expect(isDay(currentTime, sunrise, sunset)).toBe(false);
        });
    });


});