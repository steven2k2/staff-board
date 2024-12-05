import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Button } from '@mui/material';

const HomePage = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
            {/* AppBar */}
            <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Staff board
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Container sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" component="h1">
                    Full bleed Home page.
                </Typography>
            </Container>
        </Box>
    );
};

export default HomePage;