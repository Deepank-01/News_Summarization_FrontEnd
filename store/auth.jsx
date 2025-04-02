import { create } from "zustand";
import axiosInstance from "../axios/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";


export const useAuth=create((set,get)=>({
//  local storage  token , auth-user :user info backend and loaclstoarge store 
authUser:localStorage.getItem("User") ? (JSON.parse(localStorage.getItem("User"))): (null),
Token:localStorage.getItem("Token")? (localStorage.getItem("Token")) : null,
isLoggingIn:false,
isSigningUp:false,

// functions
signin:async(data)=>{
   try{
    // axios call 
    set({isSigningUp:true})
    const res=await axiosInstance.post("/api/auth/Signup",data)
    console.log("The resposne from the backedn is ", res)
    if(res?.data?.success==false) {
        toast.error(res?.data?.message)
        set({isSigningUp:false})
        return 
    }
    localStorage.setItem("User", JSON.stringify(res?.data?.user));
        set({authUser:JSON.parse(localStorage.getItem("User"))})
        localStorage.setItem("Token", (res?.data?.token));
        set({Token:(localStorage.getItem("Token"))})
        toast.success("SignUp Success")
        set({isSigningUp:false})
   }
   catch(err){
    toast.error(" Error")
    console.log(err.message)
    set({isSigningUp:false})
   }
},

login:async(data)=>{
try {
 
    //
    set({isLoggingIn:true})
    const res=await axiosInstance.post("/api/auth/login",data)
    console.log("The resposne from the backedn is ", res)
    if(res?.data?.success==false) {
        toast.error(res?.data?.message)
        set({isLoggingIn:false})
        return 
    }
    localStorage.setItem("User", JSON.stringify(res?.data?.user));
    set({authUser:JSON.parse(localStorage.getItem("User"))})
    localStorage.setItem("Token", (res?.data?.token));
    set({Token:(localStorage.getItem("Token"))})
    toast.success("Login Success")
    set({isLoggingIn:false})
} 
catch (error) {
    // 
    set({isLoggingIn:false})
}
},

logout: ()=>{
    localStorage.setItem("User",null)
    localStorage.setItem("Token",null)
    set({authUser:null})
    set({Token:null})
    

}




} ) )