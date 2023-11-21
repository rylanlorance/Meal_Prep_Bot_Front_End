import React from 'react'
import { Box, Typography } from '@mui/material'

export default function SubHeroItem() {
    return (
        <Box sx={{ borderStyle: "dotted",
                    textAlign: "center"}}>
            <Box
                height={100}
                width={100}
                component="img"
                src="/assets/process1.png">
            </Box>
            <Typography variant='h5' color="primary">
                Select Recipes
            </Typography>
            <Typography variant='h7'>
                Choose from the RecipeBook Database.
            </Typography>
        </Box>
    )
}
