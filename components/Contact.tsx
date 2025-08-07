'use client'
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa"
import { BiLoaderAlt } from "react-icons/bi"
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks";
import { motion } from 'framer-motion';
import { sendEmail } from "@/actions/sendEmail";
import { useState } from "react";

const Contact = () => {
    const { ref } = useSectionInView("Contact");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (formData: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');
        
        try {
            await sendEmail(formData);
            setSubmitStatus('success');
            // Reset form
            const form = document.getElementById('contact-form') as HTMLFormElement;
            form?.reset();
        } catch (error) {
            setSubmitStatus('error');
            console.error("Email sending failed:", error);

        } finally {
            setIsSubmitting(false);
            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "shelkeatharv964@gmail.com",
            href: "mailto:shelkeatharv964@gmail.com"
        },
        {
            icon: <FaLinkedin />,
            label: "LinkedIn",
            value: "Connect with me",
            href: "https://www.linkedin.com/in/atharv-shelke/"
        },
        {
            icon: <FaGithub />,
            label: "GitHub",
            value: "View my projects",
            href: "https://github.com/AtharvShelke"
        },
        {
            icon: <FaMapMarkerAlt />,
            label: "Location",
            value: "Maharashtra, India",
            href: null
        }
    ];

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-full max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">Get in Touch</h2>
            
            <motion.p 
                className="text-center text-slate-600 dark:text-slate-300 mb-16 max-w-2xl mx-auto text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
                Feel free to reach out!
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
                
                {/* Contact Information */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        Let's Connect
                    </h3>
                    
                    <div className="space-y-4">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.02, x: 5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                            >
                                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white">
                                    {info.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                        {info.label}
                                    </p>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            target={info.href.startsWith('http') ? '_blank' : undefined}
                                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-slate-900 dark:text-white font-medium">
                                            {info.value}
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                        Send a Message
                    </h3>
                    
                    <form 
                        id="contact-form"
                        className="space-y-6" 
                        action={handleSubmit}
                    >
                        {/* Email Input */}
                        <div>
                            <label 
                                htmlFor="senderEmail" 
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="senderEmail"
                                id="senderEmail"
                                className="w-full h-12 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                                placeholder="your.email@example.com"
                                required
                                maxLength={200}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label 
                                htmlFor="message" 
                                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                            >
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows={6}
                                className="w-full rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                                placeholder="Tell me about your project, question, or just say hello!"
                                required
                                maxLength={500}
                                disabled={isSubmitting}
                            />
                        </div>

                        {/* Submit Button */}
                        <motion.button 
                            type="submit" 
                            className={`w-full h-12 flex items-center justify-center gap-3 rounded-2xl font-medium transition-all duration-300 ${
                                submitStatus === 'success' 
                                    ? 'bg-green-600 hover:bg-green-700' 
                                    : submitStatus === 'error'
                                    ? 'bg-red-600 hover:bg-red-700'
                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                            } text-white shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed`}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <BiLoaderAlt className="animate-spin text-lg" />
                                    Sending...
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    <HiCheckCircle className="text-lg" />
                                    Message Sent!
                                </>
                            ) : submitStatus === 'error' ? (
                                <>
                                    <HiExclamationCircle className="text-lg" />
                                    Try Again
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </motion.button>

                        {/* Status Message */}
                        {submitStatus === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-600 dark:text-green-400 text-sm text-center"
                            >
                                Thank you! I'll get back to you soon.
                            </motion.p>
                        )}
                        
                        {submitStatus === 'error' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-600 dark:text-red-400 text-sm text-center"
                            >
                                Something went wrong. Please try again or email me directly.
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </div>

            {/* Quick Contact CTA */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
            >
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 border border-blue-200 dark:border-slate-600">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Prefer a Quick Chat? 💬
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                        I'm always available for a coffee chat (virtual or in-person) to discuss opportunities and ideas.
                    </p>
                    <a
                        href="mailto:shelkeatharv964@gmail.com?subject=Quick Chat Request"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        <FaEnvelope />
                        Email Me Directly
                    </a>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default Contact
