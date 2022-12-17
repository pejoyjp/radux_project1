import React from 'react';
import {Grid, Box, Card, CardMedia, CardContent, Typography} from "@mui/material";

import axios from "axios";

import {useQuery} from "@tanstack/react-query";
import LinearProgress from "@mui/material/LinearProgress";


const getChampions = async()=>
    await (await fetch('https://www.fastmock.site/mock/d2f5f0c73ccd3759c3505e77413a3fc7/champion/champion')).json()


function Champion(props) {
    const {data,isLoading,error} = useQuery({
        queryKey:['champion'],
        queryFn:getChampions
    })



    if(isLoading) return <LinearProgress/>

    return (
        <Box sx={{marginTop:'10px'}}>
            <Grid container spacing={2} >
                {
                    data?.data.map((item)=>(
                        <Grid item xs={6} sm={4} lg={3} key={item.id} sx={{
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',

                        }}>
                            <Card sx={{maxWidth:250,height:450}} >
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.id}_0.jpg`}
                                    alt="champion"
                                    sx={{"&:hover": {
                                            transform:'scale(1.1,1.1)'
                                        }}}
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" textAlign={'center'}>
                                        {item.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }


            </Grid>
        </Box>
    );
}

export default Champion;