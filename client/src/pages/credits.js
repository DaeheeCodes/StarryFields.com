import * as React from "react";
import "./about.css"
import CardMedia from '@mui/material/CardMedia';
import { Box, Card, Icon, TextField } from "@mui/material";
import '../assets.css';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import '../assets.css';
import './credits.css';



function Credits () {




  return (
    <div className="creditscontainer">
        <Grid className="creditsgrid" container spacing={0} columns={40} >
        <Grid item xl={38} lg={48} sm={40} xs={40}>
            <p className="creditstitle"> Built by Daehee from 0 to CRUD Using the Following:</p>
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



