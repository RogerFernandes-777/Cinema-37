
import Slider from "./Slider";
import "../assets/css/banner.css";

import { register } from "swiper/element/bundle";

import 'swiper/css';
import 'swiper/css/navigation';
register();


 

const Banner = ({fotos})=>{ 

    return(
        <div className="banner">
            <h1 className="tituloBanner">lançamentos</h1>
            <Slider fotos={fotos}/>
        </div>
    );
}

export default Banner;