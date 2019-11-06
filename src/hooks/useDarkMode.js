import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    // const [dark, setDark] = useLocalStorage ('dark', 'App');
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', 'true');

    useEffect (() => {
        const localValue = window.localStorage.getItem('darkMode')
        setDarkMode(!localValue);
        document.body.classList.toggle("dark-mode");
    }, []);

    return [darkMode, setDarkMode];
};