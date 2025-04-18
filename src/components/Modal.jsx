
import "../assets/css/modal.css";
import { ModalContext} from "../assets/context/ModalContext";
import { useContext } from "react";

const Modal = ()=>{   
 
    const { setIsVisible, value} = useContext(ModalContext);

    
    return(
        <div className="modal">

            <button className="fechar-modal" onClick={()=>setIsVisible(false)}>fechar modal</button>
            <div className="filme">
                <img src={value} alt="imagem do filme" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <button className="btn-play">assistir</button>
            </div>
            
        </div>
    )
}
 
export default Modal;