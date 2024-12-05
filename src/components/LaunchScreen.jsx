import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

const LaunchScreen = ({ title = "Loading...", showSpinner = true }) => {
    return (
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
};

export default LaunchScreen;