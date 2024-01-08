import React, { useRef } from "react";
import Cards from './Cards';

const Upperbackground = () => {

    const ref = useRef(null)
    const datas = [
        {
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nam magni inventore veritatis ullam eveniet",
            data_size:"0.9 Mb",
            download_option:false,
        },
        {
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nam magni inventore veritatis ullam eveniet",
            data_size:"0.9 Mb",
            download_option:true,
        },
        {
            discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nam magni inventore veritatis ullam eveniet",
            data_size:"0.9 Mb",
            download_option:true,
        }
    ];

    return (
        <>
            {/* <div className=' z-10 fixed h-screen w-full'> */}
                <div ref={ref} className="z-10 p-10 fixed left-0 top-0 w-full h-screen flex flex-wrap gap-5">
                    {datas.map((item, index) => (
                        <Cards data={item} refrence={ref}/>
                    ))}
                </div>
            {/* </div> */}
        </>
    )
}

export default Upperbackground




// M2

// import React, { useRef } from "react";
// import Cards from './Cards';

// const Upperbackground = () => {

//     const ref = useRef(null)
//         const data = {discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nam magni inventore veritatis ullam eveniet",
//         data_size:"0.9 Mb",
//         download_option:false,
//     }
//     const data1 = {discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nam magni inventore veritatis ullam eveniet",
//         data_size:"0.9 Mb",
//         download_option:true,
//     }
//     const data2 = {discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, nam magni inventore veritatis ullam eveniet",
//         data_size:"0.9 Mb",
//         download_option:false,
//     }

//     return (
//         <>
//             {/* <div className=' z-10 fixed h-screen w-full'> */}
//                 <div ref={ref} className="z-10 p-10 fixed left-0 top-0 w-full h-screen flex flex-wrap gap-5">
//                     <Cards data={data} />
//                     <Cards data={data1} />
//                     <Cards data={data2} />
//                 </div>
//             {/* </div> */}
//         </>
//     )
// }

// export default Upperbackground