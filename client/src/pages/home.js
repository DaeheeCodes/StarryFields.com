import * as React from "react";
import Grid from '@mui/material/Grid';
import "./home.css"

//style component for better readability.

const titlestyle = {
    fontFamily: "star",
    color: '#ccd5ae',
    fontSize: '70px',
    float: "right",
};

function Home () {
  return (
    <Grid container spacing={2} columns={16} >
  <Grid item xs={16} sx={{...titlestyle}}>
    <p>Starry Fields</p>
  </Grid>
  <Grid item xs={8}>
    <p>xs=8</p>
  </Grid>
</Grid>
  );
}



export default Home



