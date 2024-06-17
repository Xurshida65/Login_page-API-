import { useState } from "react"
import "./login.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Login = () => {
const [password, setPassword] = useState("")
const [number, setNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin", {
      method:"POST",
      body: JSON.stringify({
        phone_number: number,
        password: password
      }),
      headers: {
        "Content-type": "application/json; chartset=UTF-8"
      },
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      if(data?.success){
        toast.success("Logged in successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
      }
      else{
        toast.error("Login failed!", {
          position: "top-center",
          autoClose: 2000,
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <>
    <div className="wrapper">
        <form action="">
            <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" className="password same_style" required/>
            <input type="text" onChange={(e)=>{setNumber(e.target.value)}} placeholder="Phone number" className="number same_style" required/>
            <button className="btn" onClick={handleSubmit}>Send</button>
        </form>
    </div>

    </>
  )
}