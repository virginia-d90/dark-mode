import  {useEffect} from 'react'
import {useLocalStorage} from "./useLocalStorage"


const useDarkMode = (toggle) => {
    const [someValue, setSomeValue] = useLocalStorage(toggle)

    useEffect(() => {
       if(someValue) {
           window.document.body.classList.add('dark-mode')
       } 

    }, [someValue])

    return [someValue, setSomeValue]
}

export default useDarkMode
