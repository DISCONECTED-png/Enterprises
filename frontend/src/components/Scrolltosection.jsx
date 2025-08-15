import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const section = document.getElementById(location.hash.substring(1));
            if (section) {
                const elementPosition = section.offsetTop;
                const offsetPosition = elementPosition
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return null; // No UI component, just handles scrolling
};

export default ScrollToSection;
