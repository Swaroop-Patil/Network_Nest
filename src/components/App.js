import React, {useState} from "react";    //   to persist data we use useeffect hook
//import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { uuid } from "uuidv4";

import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {   //App component

  //const LOCAL_STORAGE_KEY="contacts";

 const [contacts,setContacts]= useState([]);  //creating state //setContacts to update state
    
 const addContactHandler =(contact) =>
 {                                           //going to get contact frm addContactHandler
 console.log(contact);
  setContacts([...contacts,contact])

 };

 /*const removeContactHandler =(id) =>
{
  const newContactList=contacts.filter((contact) => {
    return contact.id !==id;
  });

  setContacts(newContactList);
}*/
 
/*useEffect(() => {
 const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));  //grab info frm local storage and display it as we refersh
 if(retrieveContacts) setContacts(retrieveContacts);//set the state os setContacts
 },[]);

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));  //storing data in local storage
  },[contacts]);*/
    
  return (
      <div  className="ui container">
     <Header />
      <AddContact addContactHandler={addContactHandler}/>
                                                             {/*passing frm child to parent by using func as prop */}
      <ContactList contacts={contacts} /> {/*getContactId={removeContactHandler}*/}/>   {/*passing contacts array using props*  //passing removeconhandler to contactlist by giving prop name as getcontactId */}
      
      </div>
    
  );
};

export default App;
