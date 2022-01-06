import {motion} from "framer-motion";
export default function NavBar() {
    const variants = {
        initial:{
            y:"-100vh"
        },
        animate:{
            y:0,
            transition:{
                stiffness:1,
            }
        }
    }
    return(
        <div>
            <motion.div variants={variants} initial="initial" animate="animate" className="container lg:w-[1300px] mx-auto flex h-[80px] items-center px-4 lg:px-10">
                <div className="py-2">
                    <p className="text-4xl font-sans font-semibold text-[#4169E0]">zeppto</p>
                </div>
                <div className="items-center ml-auto hidden lg:flex">
                    <p className="text-md cursor-pointer hover:underline underline-offset-8 hover:text-blue-400 font-medium">Solution</p>
                    <p className="text-md ml-10 cursor-pointer hover:underline underline-offset-8 hover:text-blue-400 font-medium">About Us</p>
                    <p className="text-md ml-10 cursor-pointer hover:underline underline-offset-8 hover:text-blue-400 font-medium">Blog</p>
                    <button className="bg-blue-600 py-2 px-3 ml-10 rounded text-white">Install Solution</button>
                </div>
            </motion.div>
        </div>
    )
};
