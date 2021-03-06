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
import Paul from '../photos/paulan.jpeg'
import '../assets.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { ImportContactsSharp } from "@material-ui/icons";
/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const container={
    mt: '3%',
    ml: '17%',
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
    mb: '70px',
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
}

const avatarcardpaul={
    position: 'relative',
    width: '100px',
    height: '100px',
    zIndex: '0',
    ml: '-1%',
    top: '-101%',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)',
    borderStyle: 'inset',
}


const clippedcard={
    posittion: 'absolute',
    overflow: 'hidden',
    width: '301px',
    height: '201px',
    //backgroundImage: `url(${KoreanFlag})`,
    zIndex: '-4',
    clipPath: 'polygon(80% 0, 100% 0%, 100% 100%, 80% 100%)',
    borderRadius: '48px',
    backgroundSize: 'contain',
    mt: '-.9%',
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
        <Grid item xl={13} lg={20} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcard, bgcolor: '#b5838d'}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Daehee}`} sx={{...avatarcard, borderColor: '#b5838d'}}/>
            <Box className="jobdesc" sx={{}}>
            <p >Full Stack-</p>
            <p >Web Developer</p>
            <p >Site Manager</p>
            <Box className="iconcontainer">
            <Avatar onClick={() =>  window.open("https://github.com/DaeheeCodes")} className='icons' sx={{ bgcolor: '#14213d'}}>
                    <GitHubIcon sx={{ Icons, }}/>
                    </Avatar>
                    <Avatar onClick={() =>  window.open("https://linkedin.com/in/DaeheeCodes")} className='icons' sx={{ bgcolor: '#0072b1'}}>
                    <LinkedInIcon />
                    </Avatar  >
                    <Avatar onClick={() =>  navigator.clipboard.writeText('DaeheeCodes@gmail.com')} className='icons' sx={{ bgcolor: '#f72585'}}>
                    <EmailIcon onClick={() =>  alert('Email Address Copied!')}/>
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
        <Grid item xl={13} lg={20} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcard, bgcolor:'#2a9d8f'}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Paul}`} sx={{...avatarcardpaul, borderColor: '#2a9d8f'}}/>
            <Box className="jobdesc" sx={{}}>
            <p >Lead Engineer</p>
            <p >Gameplay Programmer/</p>
            <p >Designer</p>
            <Box className="iconcontainer">
                 <Avatar onClick={() =>  window.open("https://github.com/paulan94")} className='icons' sx={{ bgcolor: '#14213d'}}>
                    <GitHubIcon sx={{ Icons, }}/>
                    </Avatar>
                    <Avatar onClick={() =>  window.open("https://www.linkedin.com/in/cspaulan/")} className='icons' sx={{ bgcolor: '#0072b1'}}>
                    <LinkedInIcon />
                    </Avatar  >
                    <Avatar onClick={() =>  navigator.clipboard.writeText('www.google.com')} className='icons' sx={{ bgcolor: '#f72585'}}>
                    <EmailIcon onClick={() =>  alert('Email Address Copied!')}/>
                </Avatar>
            </Box>
            <Box sx={{...aboutme}}>
                <p>Started coding in April of 2022, currently looking for a job!</p>
            </Box>
            </Box>
            <Box sx={{...namecontainer}}>
                <p>Paul An</p>
            </Box>
            </Box>
        </Grid>
        <Grid Grid item xl={0} lg={10} sm={0} xs={0}>
            <p></p>
        </Grid>
        <Grid item xl={13} lg={30} sm={40} xs={40} sx={{...profilecontainer,}}>
            <Box sx={{...profilecard}}> <Box sx={{...clippedcard, bgcolor: '#0096c7'}}  ></Box>
            <Avatar elevation={5} alt="Daehee Hwang" src={`${Gary}`} sx={{...avatarcard, borderColor: '#0096c7'}}/>
            <Box className="jobdesc" sx={{}}>
            <p >Lead Engineer</p>
            <p >Software Development</p>
            <p >Consultant</p>
            <Box className="iconcontainer">
                <Avatar onClick={() =>  window.open("https://github.com/swimgod")} className='icons' sx={{ bgcolor: '#14213d'}}>
                    <GitHubIcon sx={{ Icons, }}/>
                    </Avatar>
                    <Avatar onClick={() =>  window.open("https://www.linkedin.com/in/gary-j-fong/")} className='icons' sx={{ bgcolor: '#0072b1'}}>
                    <LinkedInIcon />
                    </Avatar  >
                    <Avatar onClick={() =>  navigator.clipboard.writeText('www.google.com')} className='icons' sx={{ bgcolor: '#f72585'}}>
                    <EmailIcon onClick={() =>  alert('Email Address Copied!')}/>
                </Avatar>
            </Box>
            <Box sx={{...aboutme}}>
                <p>Started coding in April of 2022, currently looking for a job!</p>
            </Box>
            </Box>
            <Box sx={{...namecontainer}}>
                <p>Gary Fong</p>
            </Box>
            </Box>
        </Grid>
        <Grid Grid item xl={10} lg={10} sm={0} xs={0}>
            <p></p>
        </Grid>
        </Grid>
    </div>
  );
}



export default About



