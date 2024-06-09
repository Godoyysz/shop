import React from "react";
import style from "./footer.module.css";


const Footer = () =>{
    return(
                <footer className={style.footer}>
                    <div className={style.alinhamentoDoFooter}>          
                        <div className={style.blocoIcones}>
                            <ul className={style.listaIcones}>
                                <div className={style.alinhamentoDosIcones}>
                                    <li className={style.iconeFooter}>rede social 1*</li> 
                                    <li className={style.iconeFooter}>rede social 2*</li>
                                    <li className={style.iconeFooter}>rede social 3*</li>
                                    <li className={style.iconeFooter}>rede social 4*</li> 
                                </div>
                            </ul>
                        </div>
                        <div className={style.blocoFundacaoEmpresa}>
                            <p className={style.textoFundacaoEmpresa}>Esta empresa foi criada em 25-04-2007</p>
                        </div>
                        <div className={style.blocoLogo}>
                            <p>*logo em breve</p>
                        </div>
                    </div> 
                </footer>
    );
};

export default Footer;