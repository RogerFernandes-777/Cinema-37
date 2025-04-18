import { createContext } from "react";


export const FilmeContext = createContext(); 
 
 
const FilmeProvider = ({children})=>{

    const fotos = [
        {id: 1, nome: "rambo", image: "data:image/jpeg;base64,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"},
        {id: 2, nome: "o protetor", image: "data:image/jpeg;base64,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"},
        {id: 3, nome: "shrek", image: "https://th.bing.com/th/id/OIP._6kaHg81NqU6SM2UwBe87AHaK-?rs=1&pid=ImgDetMain"},
        {id: 4, nome: "madagascar", image: "https://th.bing.com/th/id/R.b6c4197b45d9b3dc6000fa5e85f54400?rik=VeAAWpus670wrw&pid=ImgRaw&r=0"},
        {id: 5, nome: "meu malvado favorito", image: "https://th.bing.com/th/id/OIP.Jj4AD7h49NnkX7rOIGobJwHaKe?rs=1&pid=ImgDetMain"},
        {id: 6, nome: "policial em apuros 2", image: "https://th.bing.com/th/id/OIP.zEcdK0ZbRVygsK8CHCWRIAAAAA?rs=1&pid=ImgDetMain"},
        {id: 7, nome: "jhon wick 2", image: "https://th.bing.com/th/id/R.139d66819703b40567c0d678735d4ece?rik=x9bPxqnFgPOe8w&pid=ImgRaw&r=0"},
        {id: 8, nome: "jurassic world", image: "https://th.bing.com/th/id/R.1e0c45ba42087fe6a0a05df84bd33636?rik=LmUDFIBN6JhtLQ&pid=ImgRaw&r=0"},
    ];

    return(
        <FilmeContext.Provider value={fotos}>
            {children}
        </FilmeContext.Provider>
    );
}

export default FilmeProvider;