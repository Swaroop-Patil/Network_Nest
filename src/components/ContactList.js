import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    /*const deleteContactHandler =(id) =>{   //will get id frm contactCard
        props.getContactId(id);

    }*/
    const contacts =[
        {
        id:"1",
        name:"Swaroop",
        email:"cs@gmail.com",
    },
    ];
    const renderContactList= props.contacts.map((contact) =>{
        return (
           <ContactCard contact={contact} /> //clickHandler={deleteContactHandler} key={contact.id}></ContactCard>    //passing the contacts and will be usedin Contactcard
        );
    });
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};



export default ContactList;