import React from "react";
import style from "./main.module.css";
import Image from "next/image";

const Main = () =>{
    return(
        <main className={style.goo}>
            <ul>
              <li className={style.a}>rede social 1*</li> 
              <li>rede social 2*</li>
              <li>rede social 3*</li>
              <li>rede social 4*</li> 
            </ul>
      </main>
    );
};

export default Main;