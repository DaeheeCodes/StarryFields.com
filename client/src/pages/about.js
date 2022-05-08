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
import KoreanFlag from '../photos/koreanflag.jpeg'
import Daehee from '../photos/daehee.jpeg'
import '../assets.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const container={
    mt: '4%',
    ml: '10%',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'scroll',
}

const profilecontainer={
    mt: "5%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px', 
    fontFamily: "streetBold",
    mr: "3%"
    
}

const profilecard={
    mt: '15%',
    width: '400px',
    height: '230px',
    bgcolor: '#ffffff99',
    opacity: '5px',
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
    clipPath: 'polygon(79% 0, 100% 0%, 100% 100%, 79% 100%)',
    borderRadius: '48px',
    backgroundImage: `url(${TexasFlag})`,
    backgroundSize: 'contain',
}

const clippedcardkorean={
    posittion: 'absolute',
    overflow: 'hidden',
    width: '401px',
    height: '231px',
    backgroundImage: `url(${KoreanFlag})`,
    zIndex: '-4',
    clipPath: 'polygon(80% 0, 100% 0%, 100% 100%, 80% 100%)',
    borderRadius: '48px',
    backgroundSize: 'contain',
}

const clippedcardtexan={
    posittion: 'absolute',
    overflow: 'hidden',
    width: '410px',
    height: '232px',
    bgcolor: 'blue',
    zIndex: '-4',
    clipPath: 'polygon(75% 0, 100% 0%, 100% 100%, 75% 100%)',
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
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardkorean}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Daehee}`} sx={{...avatarcard}}/>
            <Box className="jobdesc" >
            <p >Full Stack Web Developer</p>
            <p >Website Manager</p>
            <Box className="iconcontainer">
                <Avatar sx={{ bgcolor: '#541388'}}>
                    <GitHubIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#51AE7E'}}>
                    <LinkedInIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#AE5181'}}>
                    <EmailIcon />
                </Avatar>
            </Box>
            </Box>
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
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardtexan}} ></Box>
            <Avatar elevation={5} alt="Gary Fong" src={`${Gary}`} sx={{...avatarcard}}/>
            <Box className="jobdesc" >
            <p >Full Stack Texan</p>
            <p >YEEHAW!</p>
            <Box className="iconcontainer">
                <Avatar sx={{ bgcolor: '#541388'}}>
                    <GitHubIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#51AE7E'}}>
                    <LinkedInIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#AE5181'}}>
                    <EmailIcon />
                </Avatar>
            </Box>
            </Box>
            </Box>
        </Grid>
        <Grid item xl={16} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardtexan}} ></Box>
            <Avatar elevation={5} alt="Gary Fong" src={`${Gary}`} sx={{...avatarcard}}/>
            <Box className="jobdesc" >
            <p >Full Stack Texan</p>
            <p >YEEHAW!</p>
            <Box className="iconcontainer">
                <Avatar sx={{ bgcolor: '#541388'}}>
                    <GitHubIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#51AE7E'}}>
                    <LinkedInIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#AE5181'}}>
                    <EmailIcon />
                </Avatar>
            </Box>
            </Box>
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



