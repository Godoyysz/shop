import React from "react";
import style from "./main.module.css";
import Image from "next/image";

const Main = () =>{
    return(
          <main className={style.main}>
            <div className={style.conteudoMain}>
             <Image
             width={100}
             height={100}
             src={"https://backiee.com/static/wallpapers/1000x563/282395.jpg"}
             />
            </div>
          </main>      
    );
};

export default Main;