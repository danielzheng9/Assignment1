import { useLayoutEffect, useRef } from 'react';

export function useGlobalOverflow<T extends HTMLElement>() {
    const navRef = useRef<T>(null);
    useLayoutEffect(() => {
        const elementNav = navRef.current;
        if (!elementNav) return;

        const checkOverflow = () => {
            const isDoggled = document.documentElement.classList.contains('doggled');
            
            if (isDoggled) {
                document.documentElement.classList.remove('doggled'); // the browser will now calculate the layout size for the desktop version, then we will see if this desktop version is applicable for us
            }

            const shouldBeDoggled = elementNav.scrollWidth > elementNav.offsetWidth;

            document.documentElement.classList.toggle('doggled', shouldBeDoggled);
        };


        const observer = new ResizeObserver(checkOverflow);
        observer.observe(elementNav);
        
        checkOverflow();

        return () => {
            observer.disconnect();
            document.documentElement.classList.remove('doggled');
        };
    }, []);

    return navRef;
}
