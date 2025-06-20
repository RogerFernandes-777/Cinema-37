
import '../assets/css/header.css';
import { FilmeContext } from '../assets/context/FilmeContext';
import { useContext, useState } from 'react';
import Modal from "./Modal"
import { ModalContext } from '../assets/context/ModalContext';

import { FaUser, FaSistrix } from "react-icons/fa"
import { Link } from 'react-router-dom';

  
const Header = ()=>{

    const fotos = useContext(FilmeContext);
   
    const [filme, setFilme] = useState('');

    const {setValue, setIsVisible} = useContext(ModalContext);
    
      
    
    function pesquisar(item, lugar){

        for (let index = 0; index < lugar.length; index++) {

            if(filme === ''){
                return;
            }
            else if(lugar[index].nome === item){
                setValue(lugar[index].image);
                setIsVisible(true);
                
                return <Modal/>;

            } else if(index === lugar.length -1){
                alert(`não temos o filme ${filme} no nosso catalogo`);
            }
        }
    }

    return(
        <header className="header">
            
            <h1>cinema37</h1>
            <div className='buscar'>
                <input type="search" id='filme' placeholder='nome de filme/série' onChange={(e)=> setFilme(e.target.value)}/>
                <button onClick={()=>pesquisar(filme, fotos)}><FaSistrix className='pesquisa'/></button>
            </div>
            <Link to={'/components/profile'}><span className="perfil"><FaUser className='user'/></span></Link>
            
        </header>
    );
}

export default Header; 