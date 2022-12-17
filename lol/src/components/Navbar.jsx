import React from 'react';
import {AppBar, Box, Toolbar, Typography, Tabs, Tab, Button} from "@mui/material";

function Navbar(props) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar position={'sticky'}>
            <Toolbar sx={{background:'rgb(17,17,17)'}} >
                <Typography>
                    ROIT GAMES
                </Typography>
                <Box ml={'20px'}>
                    <Button color={'inherit'}>
                        Game
                    </Button>
                    <Button color={'inherit'}>
                        Champion
                    </Button >
                </Box>
            </Toolbar>

        </AppBar>
    );
}

export default Navbar;