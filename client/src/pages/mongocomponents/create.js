import React, { useState } from "react";
import { useNavigate } from "react-router";
import { DateTimePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers'

export default function Create() {
 const [form, setForm] = useState({
   postnumber: "",
   photo: "",
   title: "",
   date: "",
   content: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPost = { ...form };
 
   await fetch("http://localhost:3001/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPost),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({   postnumber: "",
   photo: "",
   title: "",
   date: "",
   content: "", });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div className="container">
     <h3>Create New Blogpost</h3>
     <form onSubmit={onSubmit}>
     <div className="formContainer">
         <label htmlFor="postnumber">Post Number</label>
         <input
           type="text"
           className="formSubmitter"
           id="postnumber"
           value={form.postnumber}
           onChange={(e) => updateForm({ postnumber: e.target.value })}
         />
       </div>
     <div className="formContainer">
         <label htmlFor="photo">Photo URL</label>
         <input
           type="url"
           className="formSubmitter"
           id="photo"
           value={form.photo}
           onChange={(e) => updateForm({ photo: e.target.value })}
         />
       </div>
       <div className="formContainer">
         <label htmlFor="title">Title</label>
         <input
           type="text"
           className="formSubmitter"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>
       <div className="formContainer">
       <LocalizationProvider dateAdapter={AdapterDateFns} htmlFor="date">
            <DateTimePicker
                label="DateTimePicker"
                value={form.date}
                onChange={(e) => updateForm({ date: e.target.value })}
                className="formSubmitter"
            />
        </LocalizationProvider>
       </div>
       <div className="formContainer">
         <label htmlFor="content">Content</label>
         <input
           type="text"
           className="formSubmitter"
           id="content"
           value={form.content}
           onChange={(e) => updateForm({ content: e.target.value })}
         />
       </div>
       <div className="formSubmit">
         <input
           type="submit"
           value="Create Post"
           className="submitButton"
         />
       </div>
     </form>
   </div>
 );
}
