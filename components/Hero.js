import { motion } from "framer-motion";

export default function Hero() {
    return(
        <div className="ht container lg:w-[1300px] mx-auto flex justify-center items-center relative overflow-x-hidden px-4 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="col-span-2 mt-5">
                    <motion.p initial={{ opacity:0, x:"-100vh" }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }}  className="text-5xl lg:text-6xl font-medium"><span>Boost sales with </span><span className="mt-2 lg:block">the Mobile Express</span> <span className="mt-2 lg:block">Checkout</span></motion.p>
                    <motion.p initial={{ opacity:0, x:"-100vh" }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }} className="text-xl font-normal text-gray-500 mt-16">
                        <span>Zeppto enables express checkouts</span> <span >on your e-commerce with no code.</span> <span className="block mt-3">Activate with just a tag of free</span>
                    </motion.p>
                    <motion.button whileHover={{ x:[0,5,0,5,0] }} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }} className="bg-blue-600 py-3 px-8 rounded text-white mt-16">Install Solution</motion.button>
                </div>
                <div className="hidden lg:block">
                    <motion.img whileHover={{ y:-10, transition:{ duration:0.1 } }} initial={{ x:"100vw" }} animate={{ x:0 , transition:{ duration:1 } }} className="rounded z-10 shadow-lg" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" />
                    <motion.div initial={{ height:0 }} animate={{ height:["0%","10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"] }} transition={{ duration:0.9 }} className="border absolute h-full top-0 right-[16%] -z-20 border-blue-500 hidden lg:block"></motion.div>
                </div>
            </div>
        </div>
    )
};
