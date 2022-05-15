import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardMedia from '@material-ui/core/CardMedia';

 import './devnotes.css'
const BlogPost = (props) => (
  <div className={'postWrapper'}>
                <div className={'postInner'}>
                    <div className={'postDescription'}>
                        <img src={`${props.record.photo}`} alt="postPicture"/>
                        <div className={'postInfo'}>
                            <div className={'author'}>
                                <img src='https://images.unsplash.com/photo-1575645186854-f9e8372e0b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80' alt="postPicture"/>
                                <div className={'authorDetails'}>
                                    <span className={'name'}>Daehee Hwang</span>
                                    <span className={'date'}>{props.record.date}</span>
                                </div>
                            </div>
                            <h1>{props.record.title}</h1>
                        </div>
                        <div className={'postText'} dangerouslySetInnerHTML={{__html: (props.record.content).replace(/\n/g,"<br />")}}/>
                        <div className={'postActionsInfo'}>

                        </div>
                    </div>
                </div>
          </div>
);
//{post?.user?.firstName} {post.user.lastName}
export default function DevNotes() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:3000/record`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 

 // This method will map out the records on the table
 function blogs() {
   return records.map((record) => {
     return (
       <BlogPost
         record={record}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div className="hello">
       <div>{blogs()}</div>
   </div>
 );
}