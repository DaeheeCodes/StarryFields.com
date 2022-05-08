import * as React from "react";
import "./about.css"
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { borderRadius } from "@mui/system";
import '../assets.css'
import Grid from '@mui/material/Grid'

/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const gridbox ={
    display: 'flex',
}

const profilecard = {
    width: '400px',
    height: '230px',
    bgcolor: 'white',
}

const container = {
    ml: "15vw",
    mt: "15vh",
}

function About () {

/* alternative clever soluition saved for reference
    let text = ["We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design.",
        <br/>,"Follow our journey here and see what we have brewing!"];
*/  

  return (
    <div sx={{gridbox}}>
        <Grid container spacing={0} columns={20} sx={{...container}} >
            <Grid item xs={10}>
                <Box sx={{...profilecard}}>
                </Box>
            </Grid>
            <Grid item xs={10}>
                <Box sx={{...profilecard}}>
                </Box>
            </Grid>
            <Grid item xs={10}>
                <Box sx={{...profilecard}}>
                </Box>
            </Grid>
            <Grid item xs={10}>
                <Box sx={{...profilecard}}>
                </Box>
            </Grid>
        </Grid>
    </div>
  );
}



export default About



