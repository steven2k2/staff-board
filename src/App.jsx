import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Container, CssBaseline} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import LaunchScreen from './components/LaunchScreen';
import HomePage from './pages/HomePage';

// Create a custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Blue
        },
        secondary: {
            main: '#9c27b0', // Purple
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});


const App = ({loadDuration = 1000}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), loadDuration);
        return () => clearTimeout(timer); // Clean up timer to avoid memory leaks
    }, [loadDuration]);

    return (
        <>
            <CssBaseline/>
            {isLoading ? <LaunchScreen title="Staff Board"/> : <HomePage/>}
        </>
    );

};

App.propTypes = {
    loadDuration: PropTypes.number,
};

export default App;