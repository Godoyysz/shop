import React from "react";
import style from "./main.module.css";
import Image from "next/image";
const url = "https://fakestoreapi.com/products";
export default async function Main(){
  const resposta = await fetch(url, {
    cache: "no-cache",
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  });
  const storeApi = await resposta.json();
  return(
          <main className={style.main}>
            <div className={style.conteudoMain}>
              {storeApi.map((produtos) =>
                <div className={style.card}>
                <Image width={100} height={100} src={produtos.image_url}/>
                <h1>{produtos.nome_produto}</h1>
              </div>
            )}             
            </div>
          </main>      
    );
};

