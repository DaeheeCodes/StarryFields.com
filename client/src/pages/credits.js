import * as React from "react";
import "./about.css"
import CardMedia from '@mui/material/CardMedia';
import { Box, Card, Icon, TextField } from "@mui/material";
import '../assets.css'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import '../assets.css'
import './credits.css'
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/


function Credits () {




  return (
    <div className="creditscontainer">
        <Grid className="creditsgrid" container spacing={0} columns={40} >
        <Grid item xs={40}>
            <TextField>xs=8</TextField>
        </Grid>
        <Grid item xs={4}>
            <Card>xs=4</Card>
        </Grid>
        <Grid item xs={4}>
            <Card>xs=4</Card>
        </Grid>
        <Grid item xs={8}>
            <Card>xs=8</Card>
        </Grid>
        </Grid>
    </div>
  );
}



export default Credits



