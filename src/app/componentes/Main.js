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
                <Image className={style.imagemProduto} src={produtos.image_url}/>
                <p>{produtos.nome_produto}</p>
                <p>{produtos.preco_produto}</p>
                <p>{produtos.categoria_produto}</p>
                <p>{produtos.avaliacao_produto}</p>
                <p>{produtos.quantidadeAvaliacoes_produto}</p>
                <p>{produtos.preco_descricao}</p>
              </div>
            )}             
            </div>
          </main>      
    );
};

