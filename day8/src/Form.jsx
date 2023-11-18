import { useState } from "react";

const Form=()=>{
    const [password,setPassword]=useState("Password");
    const [email,setEmail]=useState("Email")
    const [labelPassword,setLabelPassword]=useState("        ")
    const [labelEmail,setLabelEmail]=useState("     ")
    const handleFocusPassword=async(e)=>{
        let stringa = e.target.placeholder;
        const array = Array.from(stringa).join(",")
        for (let i = 0; i < 15; i++) {
            setTimeout(()=>{
            if (array[i]!==","&&array[i]!==undefined) {
                setLabelPassword(prev=>prev+array[i]) 
                setPassword(prev=>prev.replace(array[i]," ")) 
            }
        },40*i)
            
        }
    }
    const handleFocusEmail=async(e)=>{
        let stringa = e.target.placeholder;
        const array = Array.from(stringa).join(",")
        for (let i = 0; i < 15; i++) {
            setTimeout(()=>{
            if (array[i]!==","&&array[i]!==undefined) {
                setLabelEmail(prev=>prev+array[i]) 
                setEmail(prev=>prev.replace(array[i]," ")) 
            }
        },60*i)
            
        }
    }
    const handleBlurEmail=async()=>{
        let stringa = "Email";
        setEmail("")
        const array = Array.from(stringa).join(",")
        for (let i = 0; i < 15; i++) {
            setTimeout(()=>{
            if (array[i]!==","&& array[i]!==undefined) {
                setLabelEmail(prev=>prev.replace(array[i]," ")) 
                setEmail(prev=>prev+array[i]) 
            }
        },60*i)
            
        }
    }
    const handleBlurPassword=async()=>{
        let stringa = "Password";
        setPassword("")
        const array = Array.from(stringa).join(",")
        for (let i = 0; i < 15; i++) {
            setTimeout(()=>{
            if (array[i]!==","&& array[i]!==undefined) {
                setLabelPassword(prev=>prev.replace(array[i]," ")) 
                setPassword(prev=>prev+array[i]) 
            }
        },40*i)
            
        }
    }
    

    return(
      <form action="" className="flex flex-col gap-8 w-1/3 items-center bg-cyan-700 rounded-xl opacity-80">
        <h1 className=" p-4 text-center w-full text-4xl text-gray-200 font">Please Login</h1>
        <label htmlFor="email"  className="label1">{labelEmail}</label>
        <input type="text"  name="email" className=" w-4/5 bg-cyan-700 bordoSotto" placeholder={email} onFocus={handleFocusEmail} onBlur={handleBlurEmail}/>
        <label htmlFor="password" className="label2">{labelPassword}</label>
        <input type="password" name="password" className=" w-4/5 bg-cyan-700 bordoSotto" onFocus={handleFocusPassword} placeholder={password} onBlur={handleBlurPassword}/>
        <input type="submit" value="Login" className=" w-4/5 bg-white rounded-xl bottone text-3xl p-4" />
        <p className=" text-left w-4/5 pb-4">Don't have an Account <a href="#">Register</a></p>
      </form>
    )
}

export default Form;