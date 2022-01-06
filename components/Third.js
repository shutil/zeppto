import { motion } from "framer-motion";

export default function Third() {
    return(
        <motion.div initial={{ x:"-10vw", opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once: false }} className="mt-7 container lg:w-[1300px] mx-auto shadow-md py-10 px-10 flex flex-col">
            <p className="text-4xl">Zeppto users see</p>
            <div className="my-20 text-xl">
                <p className="text-5xl font-bold">+20%</p>
                <p className="mt-2">mobile conversion rate</p>
            </div>
            <p className="text-gray-500">based on average mobile conversion rate across different industries</p>

        </motion.div>
    )
};
