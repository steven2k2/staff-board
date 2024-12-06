import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types
import { Box, Typography, CircularProgress } from '@mui/material';

/**
 * LaunchScreen Component
 * Displays a full-page loading screen with a title and an optional spinner.
 *
 * @param {string} title - The title text to display.
 * @param {boolean} showSpinner - Whether to show the loading spinner.
 */
const LaunchScreen = ({ title = "Loading...", showSpinner = true }) => (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        width="100%"
        bgcolor="background.default"
        color="text.primary"
        textAlign="center"
    >
        <Typography variant="h4" component="h1" gutterBottom>
            {title}
        </Typography>
        {showSpinner && <CircularProgress />}
    </Box>
);

// Define prop types
LaunchScreen.propTypes = {
    title: PropTypes.string,        // The title prop must be a string
    showSpinner: PropTypes.bool,   // The showSpinner prop must be a boolean
};

export default LaunchScreen;