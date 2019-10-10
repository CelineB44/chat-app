import React from 'react';
import Contact from '../Contact/Contact'

const users=[
  {
    name:
    "Jesus Script",
    status: true,
    avatar:
      "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: 
    "Chuck Norris",
    status: true,
    avatar:
      "https://randomuser.me/api/portraits/men/23.jpg"
  },
  {
    name: 
    "Larusso Phpousse",
    status: false,
    avatar:
      "https://randomuser.me/api/portraits/women/50.jpg"
  },
  {
    name:
      "Harry Potter",
    status: false,
    avatar:
      "https://randomuser.me/api/portraits/men/47.jpg"
  }, 
  {
    name:
      "Hermione Granger",
    status: true,
    avatar:
      "https://randomuser.me/api/portraits/women/47.jpg"
  }
]


const ContactList = () =>{
return(
  users.map((person) => {
    return(
      <Contact Name={person.name}
       Status={person.status}
       
       Avatar={person.avatar}/>
       
    )
      
  }    
))
   
    
};

export default ContactList;