import React from 'react';
import Contact from '../Contact/Contact'

const users=[
  {
    name:
    "Jesus Script",
    online: true,
    avatar:
      "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: 
    "Chuck Norris",
    online: true,
    avatar:
      "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    name: 
    "Larusso Phpousse",
    online: false,
    avatar:
      "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    name:
      "Harry Potter",
    online: false,
    avatar:
      "https://randomuser.me/api/portraits/men/47.jpg"
  }, 
  {
    name:
      "Hermione Granger",
    online: true,
    avatar:
      "https://randomuser.me/api/portraits/women/47.jpg"
  }
]


const ContactList = () =>{
return(
  users.map((item) => {
    return(
      <Contact name={item.name}
       online={item.online}
       
       avatar={item.avatar}/>
       
    )
      
  }    
))
   
    
};

export default ContactList;