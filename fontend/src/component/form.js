import { useState } from "react"
import Axios from "axios" 
import "./form.css"
export default function MyForm(){
    const[messages, setMessage] = useState({
        sender: "",
        phone: "",
        message: ""
    })

    function handleChange(event){
        const{name, value} = event.target
        setMessage((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()

         Axios.post('http://localhost:8000/messages/postmessage', {
                 sender:messages.sender,
                 message:messages.message,
                 phone:messages.phone
         }).then(()=>{
                console.log("message sent successfully")
         }).catch((err)=>{
               console.log("Ooops! error occured due to " + err)
         })  
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="sender" onChange={handleChange} value={messages.sender} placeholder="name"/>
            <input type="number" name="phone" onChange={handleChange} value={messages.phone} placeholder="phone no"/>
            <textarea cols="30" rows="5" name="message" onChange={handleChange} value={messages.message}></textarea>
            <button type="submit">SEND</button>
        </form>
    )
}