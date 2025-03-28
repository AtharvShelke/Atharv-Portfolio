import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";



export function useSectionInView(sectionName:SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        triggerOnce: false, // Change to true if you want it to trigger only once
        threshold, // Use consistent decimal formatting
    });

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return { ref };
}
