import { motion } from "framer-motion";
import {  useState } from "react";

function cp(){
    return <motion.img initial={{ x:"-100vw" }} animate={{ x:0 }} transition={{ type:"keyframes" }} className="rounded" src="https://images.unsplash.com/photo-1621504450188-702fdbbfc9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
}

export default function Second() {
    var [active,set_active] = useState(1);
    const variants = {
        open: { opacity: 1, x: 0},
        closed: { opacity: 0, x: "-100%" },
    }

    var cp = ()=>{
        return(
            <motion.div initial={{ x:"-1vw", opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once: false }}>
                <motion.img animate={active===1 ? "open" : "closed"} variants={variants} className={`rounded h-96 xl:h-auto  mx-auto ${active===1?"block":"hidden"}`} src="https://images.unsplash.com/photo-1621504450188-702fdbbfc9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
                <motion.img animate={active===2 ? "open" : "closed"} variants={variants} className={`rounded h-96 xl:h-auto  mx-auto ${active===2?"block":"hidden"}`} src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" />
                <motion.img animate={active===3 ? "open" : "closed"} variants={variants} className={`rounded h-96 xl:h-auto  mx-auto ${active===3?"block":"hidden"}`} src="https://images.unsplash.com/photo-1601128183284-8e4c7e51d65f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80" />
            </motion.div>
        )
    }
    return(
        <div className="container lg:w-[1300px] mx-auto relative px-4 lg:px-10 bg-gray-100 rounded overflow-x-hidden">
            <div className="p-10 py-20 lg:px-10">
                <motion.p  initial={{ x:"-1vw", opacity:0 }} whileInView={{ x:0, opacity:1 }} viewport={{ once: true }} className="text-6xl font-thin text-center">Activate express checkouts with</motion.p>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
                    <div className="mt-12 col-span-1">
                        { cp() }
                    </div>
                    <div className="col-span-2">
                        <div className={`mt-12 px-10 py-10 rounded cursor-pointer ${active === 1? "active":null}`} onClick={()=>{ set_active(1); }}>
                            <p className="text-2xl font-medium">Digital Wallets</p>
                            <p className="mt-6">Activate popular digital wallets such as Apple Pay, Google Pay, Amazon Pay and PayPal in order to enable your customers to check out in 1 click.</p>
                        </div>

                        <div className={`mt-12 px-10 py-10 rounded cursor-pointer ${active === 2? "active":null}`} onClick={()=>{ set_active(2); }}>
                            <p className="text-2xl font-medium">New customers</p>
                            <p className="mt-6">Activate popular digital wallets such as Apple Pay, Google Pay, Amazon Pay and PayPal in order to enable your customers to check out in 1 click.</p>
                        </div>

                        <div className={`mt-12 px-10 py-10 rounded cursor-pointer ${active === 3? "active":null}`} onClick={()=>{ set_active(3); }}>
                            <p className="text-2xl font-medium">Customers can create account</p>
                            <p className="mt-6">Activate popular digital wallets such as Apple Pay, Google Pay, Amazon Pay and PayPal in order to enable your customers to check out in 1 click.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
                        <div>
                            <p className="text-5xl">Benefits</p>
                        </div>
                        <div>
                            <p className="text-xl mt-5 xl:mt-0">Enable fast checkouts with Zeppto to boost your mobile conversion rate by 20%</p>
                        </div>
                    </div>
                </div>
                <div className="mt-20">
                    <motion.div className="grid grid-cols-1 lg:grid-cols-4 gap-20">
                        <motion.div initial={{ x:"-10vw", opacity:0 }} whileInView={{ x:0, opacity:1, transition:{ delay:0.3 } }} viewport={{ once: true }} className="flex flex-col">
                            <img className="mr-auto" src="https://uploads-ssl.webflow.com/6151cdcfcd797f7d1837384f/615327abd719e45d9cc024e9_increase.svg"/>
                            <p className="mt-7 text-xl font-medium">
                                Increase mobile conversions 
                            </p>
                            <p className="mt-3">
                                Boost your mobile conversion rate with a simplified checkout that is optimised for mobile.
                            </p>
                        </motion.div>
                        <motion.div initial={{ x:"-20vw", opacity:0 }} whileInView={{ x:0, opacity:1, transition:{ delay:0.3 } }} viewport={{ once: true }} className="flex flex-col">
                            <img className="mr-auto" src="https://uploads-ssl.webflow.com/6151cdcfcd797f7d1837384f/6153280576284854da3f78ca_fast.svg"/>
                            <p className="mt-7 text-xl font-medium">
                                Increase mobile conversions 
                            </p>
                            <p className="mt-3">
                                Boost your mobile conversion rate with a simplified checkout that is optimised for mobile.
                            </p>
                        </motion.div>
                        <motion.div initial={{ x:"-30vw", opacity:0 }} whileInView={{ x:0, opacity:1, transition:{ delay:0.3 } }} viewport={{ once: true }} className="flex flex-col">
                            <img className="mr-auto" src="https://uploads-ssl.webflow.com/6151cdcfcd797f7d1837384f/615328052840c80b0ea0498b_guaranteed.svg"/>
                            <p className="mt-7 text-xl font-medium">
                                Increase mobile conversions 
                            </p>
                            <p className="mt-3">
                                Boost your mobile conversion rate with a simplified checkout that is optimised for mobile.
                            </p>
                        </motion.div>
                        <motion.div initial={{ x:"-40vw", opacity:0 }} whileInView={{ x:0, opacity:1, transition:{ delay:0.3 } }} viewport={{ once: true }} className="flex flex-col">
                            <img className="mr-auto" src="https://uploads-ssl.webflow.com/6151cdcfcd797f7d1837384f/61532805c9caf5593c4abe41_build.svg"/>
                            <p className="mt-7 text-xl font-medium">
                                Increase mobile conversions 
                            </p>
                            <p className="mt-3">
                                Boost your mobile conversion rate with a simplified checkout that is optimised for mobile.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
};
