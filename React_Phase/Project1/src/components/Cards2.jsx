import React from "react";
import { FaRegFileArchive } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Cards = (porps) => {
    var turns = 0;

    function download_started() {
        if (turns === 0) {
            turns++;
            document.getElementById("span_download_icon").style.backgroundColor = 'white';
            document.getElementById("span_download_icon").style.color = 'rgb(24 24 27)';
            document.getElementById("span_download_option").style.backgroundColor = 'rgb(34 197 94)';
            document.getElementById("download_size").style.color = 'rgb(34 197 94)';
        } else if (turns === 1) {
            turns--;
            document.getElementById("span_download_icon").style.backgroundColor = 'black';
            document.getElementById("span_download_icon").style.color = 'rgb(212 212 216)';
            document.getElementById("span_download_option").style.backgroundColor = 'rgb(37 99 235)';
            document.getElementById("download_size").style.color = 'rgb(37 99 235)';
        }
    }

    return (
        <>
            <motion.div drag whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} dragConstraints={porps.refrence}
            className=' relative h-[260px] w-[205px] rounded-3xl overflow-hidden px-4 py-5 text-white bg-zinc-900/90 '>
                <FaRegFileArchive className='p-1 mb-3 text-2xl'/>
                <div className='text-xs leading-tight font-medium text-zinc-300'>{porps.data.discription}</div>
                <div className="footer absolute bottom-0 w-full left-0">
            
                    <div className=" px-5 flex justify-between items-center mb-5">
                        <h5 id="download_size" className= {`text-sm ${ porps.data.download_option == true ? "text-green-500" : "text-blue-600"} font-semibold`}>{porps.data.data_size}</h5>
                        {porps.data.download_option == true ? 
                            (<span id="span_download_icon" onClick={download_started} className=" px-1 py-1 bg-white text-zinc-900 rounded-full ">
                                <MdOutlineFileDownload />
                            </span>)
                            :(<span className=" px-1 py-1 bg-black text-zinc-300 rounded-full ">
                                <IoClose />
                            </span>)
                        }
                    </div>
                    {porps.data.download_option == true ? <div id="span_download_option" className=" w-full h-10 bg-green-500 bottom-0 flex justify-center font-semibold items-center text-zinc-950"> Download Now! </div>
                    : <div className=" w-full h-10 bg-blue-600 bottom-0 flex justify-center font-semibold items-center text-zinc-950"></div> }
                </div>

            </motion.div>
        </>
    )
}

export default Cards