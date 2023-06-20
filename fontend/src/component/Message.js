import "./Message.css"
export default function Message(props){

    return(
          <div>

                 <p>
                    
                      {props.message}

                 </p>

                 <div className="sender-detaisl">
                       <span>{props.sender}</span>
                       <span>{props.phone}</span> 
                 </div>
          </div>
    )
}