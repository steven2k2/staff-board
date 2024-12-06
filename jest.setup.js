import '@testing-library/jest-dom'; // Optional, for additional matchers like "toBeInTheDocument"
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

// Mock global fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
    })
);