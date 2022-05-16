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
        <Grid className="creditsgrid"  columns={40} >
        <Grid item xl={40} lg={40} sm={40} xs={40}>
            <p className="creditstitle"> Built by Daehee from 0 to CRUD Using</p>
        </Grid>
        <Grid item xl={40} lg={40} sm={40} xs={40}>
            <p className="sectionheader">Back End:</p>
        </Grid>
        <Grid className="stackgrid" container spacing={0} columns={40} >
        <Grid item xl={7} lg={7} sm={10} xs={20}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"sx={{ width: 100, height: 100 }} variant="square"/>

        </Grid>
        <Grid item xl={7} lg={7} sm={10} xs={20}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"sx={{ width: 100, height: 100 }} variant="square"/>

        </Grid>
        <Grid item xl={7} lg={7} sm={10} xs={20}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"sx={{ width: 100, height: 100 }} variant="square"/>

        </Grid>
        <Grid item xl={7} lg={7} sm={10} xs={20}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"sx={{ width: 100, height: 100 }} variant="square"/>

        </Grid>
        <Grid item xs={4}>
            <Card>xs=4</Card>
        </Grid>
        </Grid>
        <Grid item xs={8}>
            <Card>xs=8</Card>
        </Grid>
        </Grid>
    </div>
  );
}



export default Credits



