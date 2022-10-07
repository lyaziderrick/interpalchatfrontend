import React ,{useState,useRef,useEffect} from "react"
import "./logo.css"
import axios from "axios"
import LAG from "./logo.PNG"
function Logo(){
const [value, setValue] = React.useState(null);   
const[text,setText] = React.useState(null);
const [post, setPost] = React.useState(null);
const baseURL = "http://localhost:8080/lyazi";
React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []); 

//if (!post) return null;
return(
    <div>
        <div className="one">
             <div>
             <img src={LAG} alt="logo"/>
            </div>
            <div>
            <input  value={value} onChange={(e) => setValue(e.target.value)}  class="validate" />
            <input name = "message" row="70" placeholder="Message" />
            </div>
            <div>
            <button type="submit" >SignIn</button>
            </div>
        </div>

         <div>
        </div>
    </div>
    )
}
export default Logo