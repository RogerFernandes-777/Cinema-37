 

import { createContext, useState } from "react";
 

export const ModalContext = createContext();

const ModalProvider = ({children})=>{

    const[isVisible, setIsVisible] = useState(false);
    
    const [value, setValue] = useState("");

  
    
    return(
        <ModalContext.Provider value={{isVisible, setIsVisible, value, setValue}}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;