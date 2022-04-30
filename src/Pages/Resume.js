import React from "react";
import style from '../Resume.module.css';
import { GoMarkGithub } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";

function Resume (){
  return (
    <main className={ style.resume }>
      <h1>Rafael Friedel</h1>
      <section>
        <h4 className={ style.subtitle }>Contact</h4>
        <p><IoLogoWhatsapp /> +55 47 99217 1970</p>
        <p><MdOutlineMarkEmailRead /> rafafriedel@hotmail.com</p>
        <p><GoMarkGithub /> https://github.com/Rafael-Friedel/</p>
        <p><ImLinkedin /> https://www.linkedin.com/in/rafael-friedel/</p>
      </section>
      <section>
        <h4 className={ style.subtitle }>Graduação</h4>
        <p>2021-2022     Desenvolvimento Web - Trybe</p>
        <p>2011-2012     Conclusão Ensino Médio - Início do Ensino Superior (Educação Física)</p>
      </section>
      <section>
        <h4 className={ style.subtitle }>História Profissional</h4>
        <p>2020-2021  Padaria Panedoro - Padeiro - Produção</p>
        <p>2019-2020  Portu's Padaria - Confeiteiro - Produção</p>
        <p>2016-2019  Representante autônomo - Vendas</p>
        <p>2015-2016  Bokitu's Alimentos - Técnico e Vendedor - Treinamento de pessoas e Vendas</p>
        <p>2013-2015  BreadKing - Técnico - Treinamento de Pessoas</p>
        <p>2011-2012  Exército Brasileiro - Honra ao Mérito recebido</p>
        <p>2010-2013  Supermercado - Aux Padeiro - Auxiliar de produção</p>
      </section>
    </main>
  )
}

export default Resume;
