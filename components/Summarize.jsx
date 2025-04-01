import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import { useParams } from 'react-router';
import { useSummarize } from '../store/Summary';
import LoadingAnimation from '../Animation/LoadingAnimation';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const Summarize = () => {
    const { Token, authUser } = useAuth();
    const { new_url, img_url ,heading} = useParams();
    const [Text, setText] = useState("");
    const[Save,setSave]=useState(false)
    const { f_summarize, isSummarize,Notes_send} = useSummarize();
  // function call for the use effect
    const fun = async () => {
        try {
            const api_data = {
                url: decodeURIComponent(new_url),
                img: decodeURIComponent(img_url),
                Token: Token
            };
            console.log(api_data);
            const res = await f_summarize(api_data);
            console.log(res?.data?.summary);
            setText(res?.data?.summary);
        } catch (err) {
            console.log("Error in the new summarization frontend:", err);
        }
    };

    // fun call for the notes send 
    const send_fun=async()=>{
      try {
        if(Save==true){
          toast.error("Already saved")
          return
        }
        const notes_data = {
            url: decodeURIComponent(new_url),
            img: decodeURIComponent(img_url),
            text:Text,
            Token: Token
        };
        console.log(notes_data);
        const res = await Notes_send(notes_data);
        // console.log(res?.data?.summary);
        setSave(true);
        toast.success("Saved in Notes")
    } catch (err) {
        console.log("Error occur in Sending the notes to the backend", err);
        toast.error("Error in Saving the Notes")
    }
    }

    useEffect(() => {
        fun();
    }, []);

    return (
        <>
            {
                isSummarize ? (
                    <LoadingAnimation />
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="summary"
                            className='mt-24 md:mt-28 w-11/12 mx-auto min-h-[50vh] border border-red-950 flex flex-col md:gap-8 gap-4'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                      <h1 className='text-xl md:text-3xl font-extrabold md:p-4 p-2 tracking-wide leading-relaxed border-b-2 border-b-amber-900 pb-2'>
                      {(() => {
        try {
            return decodeURIComponent(heading);
        } catch (error) {
            console.error("Decoding error:", error);
            return heading; // Return raw value if decoding fails
        }
    })()}
                       </h1>


                            <motion.div
                                className='mx-auto p-2 md:p-4 md:w-[40vw] md:h-[40vh] w-[50vw] h-[20vh] overflow-hidden'
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <img
                                    src={img_url}
                                    className='w-full h-full object-contain aspect-auto'
                                />
                            </motion.div>

                            <p className='p-4 text-xl md:text-2xl font-bold'>Summarized News:</p>
                            <p className=' w-[80%] mx-auto text-lg md:text-xl leading-relaxed tracking-wide'>
                                {Text}
                            </p>

                            <div className='w-[90%] mx-auto p-2'>
                                <p className='text-lg md:text-xl font-bold'>Full Article:</p>
                                <a href={new_url} target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                                    {new_url}
                                </a>
                            </div>

                            <div className='flex items-center justify-evenly p-4'>
                                <motion.button
                                    className="btn btn-active btn-success transition-transform duration-300 ease-in-out hover:scale-110"
                                    onClick={()=>(send_fun())}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                   {Save ?("Saved"):("Add to Notes")}
                                </motion.button>

                                <motion.button
                                    className="btn btn-active btn-warning transition-transform duration-300 ease-in-out hover:scale-110"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    Ask AI
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )
            }
        </>
    )
}

export default Summarize;