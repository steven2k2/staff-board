// pages/HomPage.js

import React, { useEffect, useState } from 'react';
import { getGeolocation, fetchSunData } from '../utils/api.js';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import {Button, CircularProgress, Container} from "@mui/material";
import Box from "@mui/material/Box";

const HomePage = () => {
    const [location, setLocation] = useState(null);
    const [sunData, setSunData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { latitude, longitude } = await getGeolocation();
                setLocation({ latitude, longitude });
                const data = await fetchSunData(latitude, longitude);
                setSunData(data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
            {/* AppBar */}
            <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Home Page - Refactored Deployment
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Home Page
                </Typography>

                {/* Location Information */}
                {location ? (
                    <Typography variant="subtitle1" gutterBottom>
                        Location: {location.latitude.toFixed(2)}, {location.longitude.toFixed(2)}
                    </Typography>
                ) : (
                    <Typography variant="subtitle1" gutterBottom>
                        Determining your location...
                    </Typography>
                )}

                {/* Display Sunrise and Sunset Times */}
                {loading ? (
                    <CircularProgress />
                ) : sunData ? (
                    <Box>
                        <Typography variant="h6">Sunrise: {sunData.sunrise}</Typography>
                        <Typography variant="h6">Sunset: {sunData.sunset}</Typography>
                    </Box>
                ) : (
                    <Typography variant="h6" color="error">
                        Failed to load sun data.
                    </Typography>
                )}

                {/* Refresh Button */}
                <Button variant="contained" color="primary" onClick={() => window.location.reload()} sx={{ mt: 2 }}>
                    Refresh Location
                </Button>
            </Container>
            {/* Footer Section */}
            <footer style={{ textAlign: 'center', fontSize: '12px', color: 'gray', marginTop: '20px' }}>
                <p>Build Version: {__VERSION__}</p>
                <p>Build Date: {__BUILD_DATE__}</p>
            </footer>
        </Box>
    );


};

export default HomePage;