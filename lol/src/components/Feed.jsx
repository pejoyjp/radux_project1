import React from 'react';
import {Box, Typography} from "@mui/material";
import Champion from "./Champion.jsx";

function Feed(props) {
    return (
        <Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10px'}}>
                <Typography variant={'h5'} fontWeight={"bold"} fontStyle={'italic'}>
                    CHOOSE YOUR
                </Typography>
                <Typography variant={'h1'} fontWeight={"bold"} fontStyle={'italic'}
                            sx={{fontSize:{
                                    xs:40,
                                    md:55
                                }}}
                >
                    CHAMPION
                </Typography>
                <Typography variant={'body2'}  >
                    With more than 140 champions, you’ll find the perfect match for
                </Typography>
                <Typography variant={'body2'}>
                    your playstyle. Master one, or master them all.
                </Typography>
            </Box>
            <Champion/>
        </Box>
    );
}

export default Feed;