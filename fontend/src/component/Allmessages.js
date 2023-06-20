import React from 'react'
import Message from "./Message"
import "./Message.css"
import { useState, useEffect } from "react"
import axios from 'axios';
import Headers from './Header';
function Allmessages() {
    const [messages, setMessages] = 
    useState([]);
    const[UpdateUI,setUpdateUI]=useState(false)
const[show,setshow]=useState('')
    useEffect(()=>{
           
           //  fetching all the messages from backend using fetch api

           fetch('http://localhost:8000/messages/getallmessages').then((res)=>{
                 return res.json()
           }).then((data)=>{
                  setMessages(data.messages)
           })

          

    }, [1,UpdateUI])
    const deleteuser=(id)=>{
      const respond= axios.delete(`http://localhost:8000/messages/delete/${id}`).then((res)=>{
         console.log(res)
      }).catch((err)=>{
        console.log(err)
      
      })
      setUpdateUI((e)=>{
        return(
          !e
        )
      } )
      }
      const[messages1, setMessage1] = useState({
        sender: "",
        phone: "",
        message: ""
    })

    function handleChange(event){
        const{name, value} = event.target
        setMessage1((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }
          
    const handleUpdate=(id)=>{
   
       const update =  axios.patch(`http://localhost:8000/messages/update/${id}`, {
                 sender:messages1.sender,
                 message:messages1.message,
                 phone:messages1.phone
         }).then(()=>{
                console.log("message sent successfully")
         }).catch((err)=>{
               console.log("Ooops! error occured due to " + err)
         })
      
         setUpdateUI((e)=>{
          return(
            !e
          )
        } )
        
        
    }
    function isd(){
      setshow((e)=>{
        return ! e
        
      })
    }
        
      const allMessages = messages.map((message)=>{
           return (
           
           <body>
        
<div className="message-card">
            <div>
            <Message key={message._id} sender={message.sender} message={message.message} phone={message.phone} />
            <button className='delete' onClick={()=>deleteuser(message._id)}>Delete</button>

           <button className='delete'onClick={isd} >Update</button>

            </div>
            <div className={show ? "den" :"dens"}>
            <input type="text" name="sender" onChange={handleChange} value={messages1.sender} placeholder="name"/>
            <input type="number" name="phone" onChange={handleChange} value={messages1.phone} placeholder="phone no"/>
            <textarea cols="30" rows="5" name="message" onChange={handleChange} value={messages1.message}></textarea>
            <button type="submit" onClick={()=>handleUpdate(message._id,isd(message._id))}>SEND</button>
        </div>
           </div>
           </body>)

      })      
  return (
    <div>
      <Headers/>
        {allMessages}

    </div>
  )
}

export default Allmessages