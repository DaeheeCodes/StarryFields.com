import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";



 import './devnotes.css'


const BlogPost = (props) => 


(
  <div className={`postWrapper  ${props.record.postnumber%2 === 0 ? "collated" : ""}`}>
                <div className={`postInner`}>
                    <div className={'postDescription'} onClick={() => window.open(props.record.outsidelink)}>
                    <img className="banner" src={`${props.record.photo}`} alt="postPicture"/>
                        <div className={'postInfo'}>
                            <div className={'author'}>
                                <img className="avatar" src={`${props.record.avatar}`} alt="postPicture"/>
                                <div className={'authorDetails'}>
                                    <span className={'name'}>Daehee Hwang</span>
                                    <span className={'date'}>{props.record.date}</span>
                                </div>
                            </div>
                            <h2 className="blogtitle">{props.record.title}</h2>
                        </div>
                        <p className={'postText'} dangerouslySetInnerHTML={{__html: (props.record.content).replace(/\n/g,"<br />")}}/>
                        <p className="readmore">...Read More</p>
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
 const sortedPost = records.sort((a, b) => {
  return ((b.postnumber)- (a.postnumber));
})

console.log(sortedPost)

 // This method will map out the records on the table
 function blogs() {
   return sortedPost.map((record) => {
     
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
   <div style={{ maxHeight: '120vh', overflowY:'auto'}}>
       <div>{blogs()}</div>
   </div>
 );
}