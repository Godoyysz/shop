import React from "react";
import style from "./header.module.css";
import Image from "next/image";

const Header = () =>{
    return(
        <html>
            <body>
                <header className={style.header}>
                    <h1>olá</h1>
                </header>
            </body>
        </html>
        
    );
};

export default Header;