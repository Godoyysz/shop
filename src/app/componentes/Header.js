import React from "react";
import style from "./header.module.css";
import Image from "next/image";



const Header = () =>{
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');
</style>
    return(
           <header className={style.header}>
              <div className={style.conteudoHeader}>
                <div className={style.logo}></div>
                <p>carrinho futuramente*</p>
                <button className={style.botaoAdicionarProduto}>Adicionar produto à loja</button>
                <p>Compre hoje, para não se arrepender amanhã</p>
              </div>
           </header>          
        
    );
};

export default Header;