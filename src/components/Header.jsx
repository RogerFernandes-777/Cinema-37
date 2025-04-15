
import '../assets/css/header.css';
import { FilmeContext } from '../assets/context/FilmeContext';
import { useContext, useState } from 'react';
import Card from './Card';
  
const Header = ()=>{

    const fotos = useContext(FilmeContext);
   
    
   const [filme, setFilme] = useState('');
    
     
    
    function pesquisar(item, lugar){

        for (let index = 0; index < lugar.length; index++) {
            if(lugar[index].nome === item){
                console.log(lugar[index].nome, lugar[index].id)
            }
        }
    }

    return(
        <header className="header">
            <h1>cinema37</h1>
            <div className='buscar'>
                <input type="search" id='filme' placeholder='nome de filme/série' onChange={(e)=> setFilme(e.target.value)}/>
                <button onClick={pesquisar(filme, fotos)}></button>
            </div>
            <span className="perfil"></span>
        </header>
    );
}

export default Header;