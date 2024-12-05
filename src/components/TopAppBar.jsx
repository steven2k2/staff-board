// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopAppBar() {
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const userLocale = navigator.language || 'en-AU';
            const options = {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            };
            setCurrentDateTime(now.toLocaleString(userLocale, options));
        };

        updateTime();
        const nextMinute = 60000 - (new Date().getTime() % 60000);
        const intervalId = setTimeout(() => {
            updateTime();
            setInterval(updateTime, 60000);
        }, nextMinute);

        return () => clearTimeout(intervalId);
    }, []);

    const appBarStyles = {
        borderBottom: '2px solid #000000',
        boxShadow: 'none',
        backgroundColor: '#FFFFFF',
    };

    const titleStyles = {
        flexGrow: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#000',
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="default" sx={appBarStyles}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={titleStyles}>
                        Staff Status Board
                    </Typography>
                    <Typography variant="body1" color="inherit" aria-label={`Current date and time: ${currentDateTime}`}>
                        {currentDateTime}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}