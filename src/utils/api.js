export const getGeolocation = () =>
    new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by this browser.'));
        }
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error)
        );
    });

export const fetchSunData = async (latitude, longitude) => {
    const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&formatted=1`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch sun data');
    }
    const data = await response.json();
    return data.results;
};

// Determine if it's day or night
export const isDay = (currentTime, sunrise, sunset) => {
    const current = new Date(`1970-01-01T${currentTime}Z`).getTime();
    const sunRiseTime = new Date(`1970-01-01T${sunrise}Z`).getTime();
    const sunSetTime = new Date(`1970-01-01T${sunset}Z`).getTime();

    return current >= sunRiseTime && current <= sunSetTime; // Returns true if it's day
};