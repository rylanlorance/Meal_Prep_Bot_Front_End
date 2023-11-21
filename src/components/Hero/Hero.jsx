import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import HeroImage from '../../assets/hero1.png'
import { Button, Grid, Typography } from '@mui/material';

import './Hero.css';

function Hero(props) {
    return (
        <Grid container spacing={2}
            justifyContent="center"
            alignItems="center"
            className='hero-section'
            sx={{
            }}>
            <Grid item md={4}>
                <div className="hero-info-box">
                    <div className='hero-header'>
                        <Typography variant='h3' color="primary">
                            Your Guide for Simplified Meal Prep
                        </Typography>
                    </div>
                    <div className='hero-subheader'>
                        <Typography variant='h4' color="primary">
                            Automated meal prep and grocery lists.
                        </Typography>
                    </div>
                    <div className='hero-button-box'>
                        <Button variant='contained'>
                            Shop Recipes
                        </Button>
                    </div>
                </div>
            </Grid>
            <Grid item md={4}>
                <Box height={300} width={300} component="img"
                    alt="Food Image."
                    src={HeroImage}>
                </Box>
            </Grid>
        </Grid>

        // {/* <div className='hero-header'>
        //     <p>1</p>
        //     {/* <Typography variant='h4' color="primary">
        //         Your Guide for Simplified Meal Prep.
        //     </Typography> */}
        // {/* </div>
        //         <div className='hero-subheader'>
        //             <p>2</p>
        //         </div>
        //         <div className='hero-button-box'>
        //             <p>3</p>

        //         </div>
        //         <div className='hero-image'>
        //             <p>4</p> */}

        // {/* <img
        //                 src={HeroImage}
        //                 alt="fruit image"
        //                 width={700}
        //                 height={500}
        //                 loading="lazy"
        //             > */}

        // {/* </img> */ }
        // {/* </div> */ }
        //     // </Container >
    );
}

export default Hero;