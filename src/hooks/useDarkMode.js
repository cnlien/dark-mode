import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', "true");

    useEffect (() => {
        setDarkMode(!darkMode);
        console.log("useEffect from useDarkMode.jsx and setDarkMode is", darkMode);
        
    }, []);

    return [darkMode, setDarkMode];

};