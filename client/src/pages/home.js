import * as React from "react";
import Grid from '@mui/material/Grid';
import "./home.css"
import CardMedia from '@mui/material/CardMedia';
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const container ={
    ml: "10vw"
}

const titlestyle = {
    fontFamily: "star",
    color: '#F5F5DC',
    fontSize: '70px',
    float: "right",
    mt: "3%",
    mb: ""
};

const vidcontainer ={
    mt: "",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px', 
    color: 'beige',
}


function Home () {

/* alternative clever soluition saved for reference
    let text = ["We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design.",
        <br/>,"Follow our journey here and see what we have brewing!"];
*/  

  return (
    <div className="gridbox">
            <Grid container spacing={0} columns={40} sx={{...container}} >
        <Grid item xs={40} sx={{...titlestyle}}>
            <p>Starry Fields</p>
        </Grid>
        <Grid item xs={8}>
            <p></p>
        </Grid>
        <Grid item xs={24} sx={{mb: "3%"}}>
            <p>
            We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design. Follow our journey here and see what we have brewing!
            </p>
        </Grid>
        <Grid item xs={8}>
            <p></p>
        </Grid>
        <Grid item xs={0}>
            <p></p>
        </Grid>
        <Grid item xs={20} sx={{vidcontainer}}>
      <p className="project">Past Project</p>
        <p className="vidtitle">Factory Reset</p>
            <CardMedia component="iframe" image={"https://www.youtube.com/embed/2f2lblfm0fo"} autoplay control sx={{ height: '30vh', width: '35vw'}}/>
        </Grid>
        <Grid item xs={17} sx={{vidcontainer}}>
        <p className="project">Current Project</p>
        <p className="vidtitle">Wind Walker</p>
            <CardMedia component="iframe" image={"https://www.youtube.com/embed/qbc_xPeVLtg"} autoplay control sx={{ height: '30vh', width: '35vw'}} />
        </Grid>
        <Grid item xs={3}>
            <p></p>
        </Grid>
        </Grid>
    </div>
  );
}



export default Home



