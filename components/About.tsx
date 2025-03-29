'use client';
import SectionHeading from "./SectionHeading";
import { motion } from 'framer-motion';
import { useSectionInView } from "@/lib/hooks";

const About = () => {
    
    const { ref } = useSectionInView("About", 0.5);
    return (
        <motion.section
            ref={ref}  // Ensure ref is correctly assigned
            className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 text-lg scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Currently pursuing a degree in <span className="font-medium">Computer Science Engineering</span>,
                I developed a strong passion for <span className="font-medium">AI/ML</span> while actively exploring
                the world of development. I have hands-on experience with
                <span className="font-medium"> Python</span> for AI/ML and am currently learning <span className="font-medium">Java </span>
                to master DSA. In web development, I’m most comfortable with
                <span className="font-medium"> Next.js and the MERN stack</span>.
                <span className="italic"> My favorite part of programming</span> is solving complex problems and
                optimizing solutions. I am currently looking for an <span className="font-medium">internship </span>
                as a Full Stack Web Developer and also opportunities to deepen my knowledge in AI/ML.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, you'll probably find me immersed in
                <span className="font-medium"> gaming</span>. Whether it's exploring new virtual worlds or
                competing online, I enjoy the thrill and challenge of gaming just as much as coding.
            </p>
        </motion.section>
    );
};

export default About;
