import * as React from "react";
import "./about.css"
import CardMedia from '@mui/material/CardMedia';
import { Box, Card } from "@mui/material";
import '../assets.css'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { display } from "@mui/system";
import TexasFlag from '../photos/texasflag.jpeg'
import Gary from '../photos/garyfong.jpeg'
import KoreanFlag from '../photos/koreanflag.png'
import Daehee from '../photos/daehee.jpeg'
import '../assets.css'
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const container={
    mt: '1%',
    ml: '12%',
    display: 'flex',
}

const profilecontainer={
    mt: "5%",
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
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
}

const avatarcard={
    position: 'relative',
    width: '200px',
    height: '200px',
    zIndex: '0',
    ml: '13%',
    top: '-150%',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
}

const clippedcard={
    posittion: 'absolute',
    overflow: 'hidden',
    width: '410px',
    height: '232px',
    bgcolor: 'blue',
    zIndex: '-4',
    clipPath: 'polygon(83% 0, 100% 0%, 100% 100%, 61% 100%)',
    borderRadius: '48px',
    backgroundImage: `url(${TexasFlag})`,
    backgroundSize: 'contain',
}

const clippedcardkorean={
    posittion: 'absolute',
    overflow: 'hidden',
    width: '410px',
    height: '232px',
    bgcolor: 'blue',
    zIndex: '-4',
    clipPath: 'polygon(83% 0, 100% 0%, 100% 100%, 61% 100%)',
    borderRadius: '48px',
    backgroundImage: `url(${KoreanFlag})`,
    backgroundSize: 'contain',
}

const clippedcardtexan={
    posittion: 'absolute',
    overflow: 'hidden',
    width: '410px',
    height: '232px',
    bgcolor: 'blue',
    zIndex: '-4',
    clipPath: 'polygon(83% 0, 100% 0%, 100% 100%, 61% 100%)',
    borderRadius: '48px',
    backgroundImage: `url(${TexasFlag})`,
    backgroundSize: 'contain',
}





function About () {

/* alternative clever soluition saved for reference
    let text = ["We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design.",
        <br/>,"Follow our journey here and see what we have brewing!"];
*/  

  return (
    <div className="gridbox">
            <Grid container spacing={0} columns={40} sx={{...container}}  >
        <Grid item xl={16} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardkorean}} ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Daehee}`} sx={{...avatarcard}}/>
            <Card className="jobdesc" >
            <p >Full Stack Web Developer</p>
            <p >Website Manager</p>
            </Card>
            </Box>
        </Grid>
        <Grid item xl={16} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardkorean}} />
            <Avatar alt="Paul An" src="/static/images/avatar/1.jpg" sx={{...avatarcard}}/>
            </Box>
        </Grid>
        <Grid item xl={8}>
            <p></p>
        </Grid>
        <Grid item xl={16} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardtexan}} />
            <Avatar alt="Gary Fong" src={`${Gary}`} sx={{...avatarcard}}/>
            <h4 className="jobdesc">Full Stack Texan</h4>
            </Box>
        </Grid>
        <Grid item xl={16} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardtexan}} />
            <Avatar alt="Gary Fong" src={`${Gary}`} sx={{...avatarcard}}/>
            </Box>
        </Grid>
        <Grid item xl={8}>
            <p></p>
        </Grid>
        </Grid>
    </div>
  );
}



export default About



