import * as React from "react";
import TextField from '@mui/material/TextField';
import { Box, Card } from "@mui/material";
import '../assets.css';
import Grid from '@mui/material/Grid'
import './contactus.css';
import Button from '@mui/material/Button';
import ReCAPTCHA from 'react-google-recaptcha';

const Containerlarge ={
    position: 'absolute',
    mt: '8%',
    ml: '20%',
    width:'800px',
    aspectRatio: '5/3',
    backgroundColor: 'white',
    borderRadius: '30px',
}

const Containersmall= {
    position: 'absolute',
    display: 'flex',
    mt: '20%',
    ml: '18%',
    width:'70%',
    aspectRatio: '3/5',
    backgroundColor: 'white',
    borderRadius: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

const Title ={
    fontSize: '50px',
    verticalAlign: 'middle',
    display: 'inline-block',
    textAlign: 'center'
}
const Desc ={
    ml:'6%',
    mr:'6%',
    textIndent: '3%',
    mt:'5%'
}

const Form={
    margin: '5%',

}
const Textfield ={

}

const Buttons={
    backgroundColor: 'pink'
}

const Logocontainer={
    backgroundColor: 'beige'
}
function ContactUs () {


    return (
        <div className="container" >
            <Grid columns={20} container direction={"row"} sx={{...Containerlarge, display: { xs: 'none', sm: 'none', md: 'block' }}} >
                <Grid item md={10} sx={{...Logocontainer}}></Grid>    
                <Grid item md={10}> 
                    <Grid sx={{...Title}}>Contact Us</Grid>
                    <Grid sx={{...Desc}}>Please use this form to make a general inquiry to the team. If you want to contact a specific member of our team you can find their email on our About Us page!</Grid>
                        <Box component="form" sx={{...Form}}>
                            <Grid container direction={"column"} spacing={3}>
                            <Grid item>   
                            <TextField label="Full Name" inputProps={{minLength: 3, maxLenght:20}} fullWidth required/>
                            </Grid>
                            <Grid item>
                            <TextField label="Email" type='email'fullWidth required/>
                            </Grid>
                            <Grid item>
                            <TextField label="Message" fullWidth multiline rows={6} autocomplete="none" required/>
                            </Grid>
                            </Grid>
                                <Box><ReCAPTCHA sitekey="6LcbXNkfAAAAAMGgjYBqijekZOXdTX_odekoKyw3"/><Button type="submit" sx={{...Buttons}}>Submit</Button></Box>
                        </Box>
                </Grid>   
            </Grid>
            <Grid columns={20} sx={{...Containersmall, display: { xs: 'block', sm: 'block', md: 'none' } }} >
                <Grid sx={{...Title}}>Contact Us</Grid>
                    <Grid sx={{...Desc}}>Please use this form to make a general inquiry to the team. If you want to contact a specific member of our team you can find their email on our About Us page!</Grid>
                        <Box component="form" sx={{...Form}}>
                            <Grid container direction={"column"} spacing={3}>
                            <Grid item>   
                            <TextField label="Full Name" inputProps={{minLength: 3, maxLenght:20}} fullWidth required/>
                            </Grid>
                            <Grid item>
                            <TextField label="Email" type='email'fullWidth required/>
                            </Grid>
                            <Grid item>
                            <TextField label="Message" fullWidth multiline rows={6} autocomplete="none" required/>
                            </Grid>
                            </Grid>
                                <Box><ReCAPTCHA sitekey="6LcbXNkfAAAAAMGgjYBqijekZOXdTX_odekoKyw3"/><Button type="submit" sx={{...Buttons}}>Submit</Button></Box>
                        </Box>
            </Grid>
        </div>
    )
};

export default ContactUs