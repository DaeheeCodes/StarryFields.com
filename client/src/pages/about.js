import * as React from "react";
import "./about.css"
import CardMedia from '@mui/material/CardMedia';
import { Box, Card, Icon } from "@mui/material";
import '../assets.css'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import { bgcolor, display, fontWeight, height } from "@mui/system";
import TexasFlag from '../photos/texasflag.jpeg'
import Gary from '../photos/garyfong.jpeg'
import KoreanFlag from '../photos/koreanflag.jpeg'
import Daehee from '../photos/daehee.jpeg'
import '../assets.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { ImportContactsSharp } from "@material-ui/icons";
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const container={
    mt: '0%',
    ml: '14%',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
}

const profilecontainer={
    mt: "5%",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px', 
    fontFamily: "streetBold",     
    mb: '70px'
}

const profilecard={
    mt: '0%',
    mb: '-20%',
    width: '300px',
    height: '200px',
    bgcolor: 'white',
    opacity: '5px',
    borderRadius: '50px',
    zIndex: '-3',
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
}

const avatarcard={
    position: 'relative',
    width: '100px',
    height: '100px',
    zIndex: '0',
    ml: '-1%',
    top: '-101%',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    borderStyle: 'inset',
    borderColor: '#2a9d8f'
}

const avatarcardbot={
    position: 'relative',
    width: '100px',
    height: '100px',
    zIndex: '0',
    ml: '-1%',
    top: '-117%',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    borderStyle: 'inset',
    borderColor: '#2a9d8f'
}

const clippedcard={
    posittion: 'absolute',
    overflow: 'hidden',
    width: '410px',
    height: '23px',
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
    width: '301px',
    height: '201px',
    bgcolor: '#2a9d8f',
    //backgroundImage: `url(${KoreanFlag})`,
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

const namecontainer={
 fontSize:'25px',
 textIndent: '15%',
 color:'black',
 fontWeight: 'bolder',
 mt: '-10%',
 ml: '2%',
}

const aboutme={
    ml: '-15.5%',
    mt: '-22%',
    mb: '13%',
    width: '250px',
    height: '40px',
}

const Icons={
    ':hover': {
        cursor: 'pointer'
    }
}


function About () {

/* alternative clever soluition saved for reference
    let text = ["We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design.",
        <br/>,"Follow our journey here and see what we have brewing!"];
*/  

  return (
    <div className="gridbox">
            <Grid container spacing={0} columns={40} sx={{...container}}  >
        <Grid item xl={14} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardkorean}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Daehee}`} sx={{...avatarcard}}/>
            <Box className="jobdesc" sx={{}}>
            <p >Full Stack-</p>
            <p >Web Developer</p>
            <p >Site Manager</p>
            <Box className="iconcontainer">
                <Avatar sx={{ bgcolor: '#14213d'}}>
                    <GitHubIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#0072b1'}}>
                    <LinkedInIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#f72585'}}>
                    <EmailIcon />
                </Avatar>
            </Box>
            <Box sx={{...aboutme}}>
                <p>Started coding in April of 2022, currently looking for a job!</p>
            </Box>
            </Box>
            <Box sx={{...namecontainer}}>
                <p>Daehee Hwang</p>
            </Box>
            </Box>
        </Grid>
        <Grid item xl={14} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardkorean}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Daehee}`} sx={{...avatarcard}}/>
            <Box className="jobdesc" sx={{}}>
            <p >Full Stack-</p>
            <p >Web Developer</p>
            <p >Site Manager</p>
            <Box className="iconcontainer">
                <Avatar sx={{ bgcolor: '#14213d'}}>
                    <GitHubIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#0072b1'}}>
                    <LinkedInIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#f72585'}}>
                    <EmailIcon />
                </Avatar>
            </Box>
            <Box sx={{...aboutme}}>
                <p>Started coding in April of 2022, currently looking for a job!</p>
            </Box>
            </Box>
            <Box sx={{...namecontainer}}>
                <p>Daehee Hwang</p>
            </Box>
            </Box>
        </Grid>
        <Grid item xl={14} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardkorean}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Daehee}`} sx={{...avatarcard}}/>
            <Box className="jobdesc" sx={{}}>
            <p >Full Stack-</p>
            <p >Web Developer</p>
            <p >Site Manager</p>
            <Box className="iconcontainer">
                <Avatar sx={{ bgcolor: '#14213d'}}>
                    <GitHubIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#0072b1'}}>
                    <LinkedInIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#f72585'}}>
                    <EmailIcon />
                </Avatar>
            </Box>
            <Box sx={{...aboutme}}>
                <p>Started coding in April of 2022, currently looking for a job!</p>
            </Box>
            </Box>
            <Box sx={{...namecontainer}}>
                <p>Daehee Hwang</p>
            </Box>
            </Box>
        </Grid>
        <Grid item xl={14} lg={16} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcardkorean}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Daehee}`} sx={{...avatarcard}}/>
            <Box className="jobdesc" sx={{}}>
            <p >Full Stack-</p>
            <p >Web Developer</p>
            <p >Site Manager</p>
            <Box className="iconcontainer">
                <Avatar sx={{ bgcolor: '#14213d'}}>
                    <GitHubIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#0072b1'}}>
                    <LinkedInIcon />
                    </Avatar>
                    <Avatar sx={{ bgcolor: '#f72585'}}>
                    <EmailIcon />
                </Avatar>
            </Box>
            <Box sx={{...aboutme}}>
                <p>Started coding in April of 2022, currently looking for a job!</p>
            </Box>
            </Box>
            <Box sx={{...namecontainer}}>
                <p>Daehee Hwang</p>
            </Box>
            </Box>
        </Grid>
        <Grid Grid item xl={12} lg={8} sm={0} xs={0}>
            <p></p>
        </Grid>
        </Grid>
    </div>
  );
}



export default About



