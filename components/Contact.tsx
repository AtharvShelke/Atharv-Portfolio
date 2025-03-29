'use client'
import { FaPaperPlane } from "react-icons/fa"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks";
import { motion } from 'framer-motion';
import { sendEmail } from "@/actions/sendEmail";
const Contact = () => {
    const { ref } = useSectionInView("Contact");
    

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6">Please contact me direct at{" "} <a className="underline" href="mailto:shelkeatharv964@gmail.com">shelkeatharv964@gmail.com</a>{" "}or through this form.</p>
            <form className="mt-10 flex flex-col" action={async (formData) => {
                
                await sendEmail(formData);
            }}>
                <input
                    type="email"
                    name="senderEmail"
                    className="h-14 rounded-lg border border-black/10 p-4" placeholder="Your email"
                    required
                    maxLength={200}
                />
                <textarea
                    name="message"
                    id="message"
                    className="h-52 my-3 rounded-lg border border-black/10 p-4" placeholder="Your message"
                    required
                    maxLength={500}
                />
                <button type="submit" className="group h-[3rem] w-[8rem] flex items-center justify-center bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105">Submit {" "}<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-2 group-hover:-translate-y-2 ml-4" /></button>
            </form>
        </motion.section>
    )
}

export default Contact