import * as React from "react";
import Grid from '@mui/material/Grid';
import "./home.css"
import CardMedia from '@mui/material/CardMedia';
import '../assets.css'
import {Link} from '@mui/material';
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const container ={
    ml: "6%",
    mt: "0%"
}

const titlestyle = {
    fontFamily: "star",
    color: '#efd9ce',
    fontSize: '70px',
    float: "right",
    mt: "3%",
    mb: ""
};

const vidcontainer ={
    mt: "1.5%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px', 
    fontFamily: "streetBold",
}


const textbody = {
    mt: '5%',
    mb: '7%',
    fontFamily: "streetBold",
    color: '#efd9ce',
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
        <Grid item xs={24} sx={{...textbody}}>
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
        <Grid item xs={17} sx={{...vidcontainer}}>
      <p className="project">Past Project</p>
      <Link className="vidtitle" href="https://pauloboy.itch.io/factory-reset" underline="hover" target="_blank"> {`Factory Reset - as part of Game Jam`} </Link>
            <CardMedia component="iframe" image={"https://www.youtube.com/embed/2f2lblfm0fo"} autoplay control sx={{ height: '30vh', width: '35vw'}}/>
        </Grid>
        <Grid item xs={17} sx={{...vidcontainer}}>
        <p className="currentproject" >Current Project</p>
        <Link className="vidtitle" href="https://github.com/RevDev-Studios" underline="hover" target="_blank" > {`Wind Walker - In Development`} </Link>
            <CardMedia component="iframe" image={"https://www.youtube.com/embed/qbc_xPeVLtg"} autoplay control sx={{ height: '30vh', width: '35vw'}} />
        </Grid>
        <Grid item xs={8}>
            <p></p>
        </Grid>
        </Grid>
    </div>
  );
}



export default Home



