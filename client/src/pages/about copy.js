import * as React from "react";
import "./about.css"
import CardMedia from '@mui/material/CardMedia';
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { borderRadius } from "@mui/system";

/*regular css expressions do not inherit to mui components,  
added spearate style component for better readability than inline sx styling
*/

const papercontainer ={
    width: '88vw',
    height: '90vh',
    backgroundColor: '#4f5d75',
    ml: "10vw",
    mt: '2.5vw',
    boxShadow: "0px 1px 8px 0px rgb(0 0 0 / 12%)",
    borderRadius: '30px',
    position: 'absolute',
    zIndex: 1200,
};

const cardcontainer ={
    width: '25px',
    height: '88vh',
    backgroundColor: '#4c5c68',
    ml: "10vw",
    mt: '2.5vw',
    boxShadow: "0px 1px 8px 0px rgb(0 0 0 / 12%)",
    borderRadius: '40px',
    position:'relative',
    zIndex: 1300,
};


function About () {

/* alternative clever soluition saved for reference
    let text = ["We are a team of friends with a shared dream of being the best in Software Engineering and Graphic Design.",
        <br/>,"Follow our journey here and see what we have brewing!"];
*/  

  return (
    <div className="gridbox">
        <Paper elevation={24} sx={{...papercontainer}} > 
            <Paper sx={{cardcontainer}}>        
                <p>does this wk</p>
            </Paper>
        </Paper>
    </div>
  );
}



export default About



