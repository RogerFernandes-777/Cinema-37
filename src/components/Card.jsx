
import {ModalContext} from "../assets/context/ModalContext";
import "../assets/css/card.css";
import { useContext } from "react";

const Card = (props)=>{

    const { setIsVisible, setValue} = useContext(ModalContext);



    return(
        <div className="card">
            
            <img src={props.img} alt='imagem do filme'/>
            <button onClick={()=>{setIsVisible(true); setValue(props.img)}}>assistir</button>
        </div>
    );
}
  
export default Card;  