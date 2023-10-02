import React from 'react';
import user from '../images/ME5.jpg';

const ContactCard =(props) => {
      const {id,name,email}=props.contact;
    return (
    <div className="item">
            <img className="ui avtar image" src={user} alt="user" width="40" height="40" />
            <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
         <i 
         className="trash alternate outline icon"
         style={{color:"red", marginTop:"7px"}}
         //onclick={() => props.clickhandler(id)}
         ></i>
      </div>
    );
};

export default ContactCard;