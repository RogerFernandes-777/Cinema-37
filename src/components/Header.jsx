
import '../assets/css/header.css';
import { FilmeContext } from '../assets/context/FilmeContext';
import { useContext, useState } from 'react';
import Modal from "./Modal"
import { ModalContext } from '../assets/context/ModalContext';

  
const Header = ()=>{

    const fotos = useContext(FilmeContext);
   
    const [filme, setFilme] = useState('');

    const {setValue, setIsVisible} = useContext(ModalContext);
    
      
    
    function pesquisar(item, lugar){

        for (let index = 0; index < lugar.length; index++) {
            if(lugar[index].nome === item){
                setValue(lugar[index].image);
                setIsVisible(true);
                
                return <Modal/>;
            }
        }
    }

    return(
        <header className="header">
            <h1>cinema37</h1>
            <div className='buscar'>
                <input type="search" id='filme' placeholder='nome de filme/série' onChange={(e)=> setFilme(e.target.value)}/>
                <button onClick={()=>pesquisar(filme, fotos)}></button>
            </div>
            <span className="perfil"></span>
        </header>
    );
}

export default Header;