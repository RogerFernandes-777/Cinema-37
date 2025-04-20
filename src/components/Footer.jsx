
import '../assets/css/footer.css';
import { FaInstagram } from 'react-icons/fa';

const Footer = ()=>{

    return(
        <div className="footer">
            <div className='info'>
                <h5>desenvolvido por Roger Fernandes, dev front-end.</h5>
                <p>Bacharel em Ciência da computação.</p>
            </div>
           <div className='redes-sociais'>
                <h5>redes sociais</h5>
                <p><FaInstagram/> roger_fernand3s</p>
           </div>
        </div>
    );
}

export default Footer;