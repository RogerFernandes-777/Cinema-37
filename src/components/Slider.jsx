
import "../assets/css/slider.css";
import {Swiper, SwiperSlide} from "swiper/react";
import { useState, useEffect, } from "react";
import Card from "./Card";

const Slider = ({fotos})=>{
 

   

    const [quantity, setQuantity] = useState(1);


    useEffect(()=>{
        function windowResize(){
            if(window.innerWidth < 768){
                setQuantity(1);
            }else if(window.innerWidth === 768){
                setQuantity(2);
            }
            else if(window.innerWidth >= 1280){
                setQuantity(4);
            }
        
            else if(window.innerWidth > 1440){
                setQuantity(6);
            }
            else{
                setQuantity(5);
            }
        }

        windowResize();

        window.addEventListener("resize", windowResize);

        return () => {
            window.removeEventListener("resize", windowResize);
        }

    }, [])

    return(
        <div className="slider">
            <Swiper
            slidesPerView={quantity}
            pagination={{clickable: true}}
            navigation
            >
                {fotos.map( (item) => (
                    <SwiperSlide key={item.id}>
                        <Card img={item.image} />
                    </SwiperSlide>
                ))}
            </Swiper>

             
        </div>
    );
}

 
export default Slider;