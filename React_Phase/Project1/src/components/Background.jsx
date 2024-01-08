import React from "react";

const Background = () => {
    return(
        <>
            <div className=' z-0 fixed h-screen w-full'>
                <div className='p-[100px] w-full font-bold flex justify-center text-zinc-600 text-2xl'>Documents.</div>
                <h1 className=' absolute font-extrabold text-[220px] text-zinc-900 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>Docs.</h1>
            </div>
        </>
    )
}

export default Background