
import "../assets/css/catalogo.css";
import Card from "./Card";


const Catalogo = (props)=>{ 
  

    return(
        <div className="catalog">
            {
                props.fotos.map((item)=>{
                    return(
                       
                        <Card img={item.image} key={item.id}/>
                    );
                })
            }
        </div>
    )
}

export default Catalogo;