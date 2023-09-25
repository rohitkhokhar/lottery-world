import { useEffect, useState } from 'react';

const useResizeHeight = (elements) => {
	
	const [scrollBarHeight, setScrollBarHeight] = useState(0);
	
	const handleResize = (e) => {  
        let totalHeight = 0;
        elements?.forEach(element => { 
            totalHeight += typeof element === 'string' ? document.getElementById(element) && document.getElementById(element).offsetHeight : element;
        });

		setScrollBarHeight(totalHeight);	 	
	};

    useEffect(() => {
        handleResize();
    }, []);
 
    useEffect(() => {
        window.addEventListener("resize", handleResize, true);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
	}, []);
	
	return scrollBarHeight;

};

export default useResizeHeight;
