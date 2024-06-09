import React from "react";
import style from "./header.module.css";
import Image from "next/image";


const Header = () =>{
    return(
           <header className={style.header}>
              <Image
              width={200}
              height={200}
              src={"https://i.pinimg.com/564x/52/1e/65/521e6506979cec3cf0049791d8dbbcfb.jpg"}
              />
              <button className={style.botaoAdicionarProduto}>Adicionar produto à loja</button>
           </header>          
        
    );
};

export default Header;