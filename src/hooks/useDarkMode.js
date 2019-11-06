import {useEffect} from 'react';
import  { useLocalStorage } from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage (key);

    useEffect(() => {
        const localValue = window.localStorage.getItem('darkMode')
        if (value) {
            setValue(localValue)
        } else {
            setValue(value);
        }
    }, [])
    return [value, localValue];
}

export default useDarkMode;