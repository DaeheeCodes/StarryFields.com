import * as React from "react";
import TextField from '@mui/material/TextField';
import { Box, Card } from "@mui/material";
import '../assets.css';
import Grid from '@mui/material/Grid'
import './contactus.css';
import Button from '@mui/material/Button';
import { useState } from "react";
import { fontWeight } from "@mui/system";

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
    aspectRatio: '3/4',
    backgroundColor: 'white',
    borderRadius: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

const Title ={
    pt: '10px',
    fontSize: '50px',
    verticalAlign: 'middle',
    display: 'inline-block',
    textAlign: 'center',
    textIndent: '0px',
    fontWeight:'bolder',
    ml: '2%'
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
    backgroundColor: '#9a8c98',
    color: 'black',
}

const Logocontainer={
    position: 'fixed',

}

const Logobox={
    width: '200px',
    fontFamily: 'repet',
    fontSize: '100px',
    color: '#9a8c98',
    ml: '425px',
    mt: '200px',
}



function ContactUs (props) {

    const [mailState, setMailState] = useState ({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMailState((prevState)=> ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }
    
//react cannot use this.state so we use set state call back function. state read to useState[0] while setState reads to useState[1], call back functions useState and setState is both like this.state = X
// we basically now have two classes one is the const original 'state' second is the setState that the callback functions work off of.
    
/* function handleChange (e) {
        setState((prevState)=> ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
*/
// async function waits for event to run through the function before executing then functions. 
// data needs to be submitted as json between servers - server 'res(response)' is sent through POST on local server 3001/send and is read at index.js - our node server controller,
// last then function just resets the state to empty. which is read at 'value' down in our MUI container
    const submitEmail = async (e) => {
        e.preventDefault();
        console.log({mailState});
        await fetch("/send", {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({mailState}),
        })
            .then((res)=> res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                alert("Message Sent");
                } else if (resData.status === "fail") {
                alert("Message failed to send");
                }
            })
            .then(() => {
                setMailState({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
        });
    };
    return (
        <div className="container" >
            <Grid columns={20} container direction={"row"} sx={{...Containerlarge, display: { xs: 'none', sm: 'none', md: 'block' }}} >
                <Grid item md={10} sx={{...Logocontainer}}><Box sx={{...Logobox}}>Starry Fields</Box></Grid>    
                <Grid item md={10}> 
                    <Grid sx={{...Title}}>Contact Us</Grid>
                    <Grid sx={{...Desc}}>Please use this form to make a general inquiry to the team. If you wish to contact a specific member of our team you can find their email on our About Us page!</Grid>
                        <Box component="form" sx={{...Form}} onSubmit={submitEmail}>
                            <Grid container direction={"column"} spacing={2}>
                            <Grid item>   
                            <TextField label="Full Name" inputProps={{minLength: 3, maxLenght:20}} fullWidth required onChange={handleStateChange} name="name" evalue={mailState.name}/>
                            </Grid>
                            <Grid item>
                            <TextField label="Email" value={mailState.email} type='email' onChange={handleStateChange} fullWidth required name="email"/>
                            </Grid>
                            <Grid item>
                            <TextField label="Subject" value={mailState.subject} onChange={handleStateChange} fullWidth required name="subject"/>
                            </Grid>
                            <Grid item>
                            <TextField label="Message" value={mailState.message} fullWidth multiline rows={6} autocomplete="none" onChange={handleStateChange} required name="message"/>
                            </Grid>
                            </Grid>
                                <Box><Button type="submit" sx={{...Buttons}}>SUBMIT</Button></Box>
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
                            <TextField label="Email" type='email'fullWidth required name="email"/>
                            </Grid>
                            <Grid item>
                            <TextField label="Message" fullWidth multiline rows={6} autocomplete="none" required name="message"/>
                            </Grid>
                            </Grid>
                                <Box><Button type="submit" sx={{...Buttons}}>Submit</Button></Box>
                        </Box>
            </Grid>
        </div>
    )
};

export default ContactUs

//<ReCAPTCHA sitekey="6LcbXNkfAAAAAMGgjYBqijekZOXdTX_odekoKyw3"/>
//import ReCAPTCHA from 'react-google-recaptcha';
