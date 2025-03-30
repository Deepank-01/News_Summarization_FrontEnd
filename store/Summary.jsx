import { create } from "zustand";
import axiosInstance from "../axios/axiosInstance";
import toast from "react-hot-toast";
export const useSummarize=create((set,get)=>({
    isSummarize:false,
    summarize_text:"",

    f_summarize:async(data)=>{
       try{
        set({isSummarize:true})
        const res=await axiosInstance.post("Note/summarize",data)
        if(res?.data?.success==false) {
            toast.error(res?.data?.message)
            set({isSigningUp:false})
            return 
        }

        set({summarize_text:res?.data?.summary})
        console.log("The text is stored")
        set({isSummarize:false})
        return res
       }
       catch(err){
        //  
        toast.error(" Error")
        console.log(err.message)
        set({isSummarize:false})
       }
    },
    Notes_send:async(data)=>{
        try{
            // loading for the the saving the notes 
            // data contain the value of the constin summary , url ,imag url 
             const res=await axiosInstance.post("",data)           
            //  res validation and  the toast 
        }
        catch(err){
         //   
        }
    }
}))