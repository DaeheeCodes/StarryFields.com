import * as React from "react";
import "./about.css"
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/material";
import '../assets.css'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'

/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/


const container ={
    ml: "14vw"
}



const profilecontainer={
    mt: "",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px', 
    fontFamily: "streetBold",

}

const profilecard={
    mt: '15%',
    width: '400px',
    height: '230px',
    bgcolor: 'white',
    borderRadius: '50px',
    zIndex: '-3',
}

const avatarcard={
    posittion: 'relative',
    width: '200px',
    height: '200px',
    zIndex: '0',
    ml: '13%',
    top: '-10vh'
}




function About () {

/* alternative clever soluition saved for reference
    let text = ["We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design.",
        <br/>,"Follow our journey here and see what we have brewing!"];
*/  

  return (
    <div className="gridbox">
            <Grid container spacing={0} columns={40} sx={{...container}} >
        <Grid item sm={20} xs={40} sx={{...profilecontainer}}>
            <Box sx={{...profilecard}}>
            <Avatar alt="Paul An" src="/static/images/avatar/1.jpg" sx={{...avatarcard}}/>
            </Box>
        </Grid>
        <Grid item sm={20} xs={40} sx={{...profilecontainer}}>
            <Box sx={{...profilecard}}>
            <Avatar alt="Paul An" src="/static/images/avatar/1.jpg" sx={{...avatarcard}}/>
            </Box>
        </Grid>
        <Grid item sm={20} xs={40} sx={{...profilecontainer}}>
            <Box sx={{...profilecard}}>
            <Avatar alt="Paul An" src="/static/images/avatar/1.jpg" sx={{...avatarcard}}/>
            </Box>
        </Grid>
        <Grid item xs={20} sx={{...profilecontainer}}>
            <Box sx={{...profilecard}}>
                <Avatar alt="Paul An" src="/static/images/avatar/1.jpg" sx={{...avatarcard}}/>
            </Box>
        </Grid>
        </Grid>
    </div>
  );
}



export default About



