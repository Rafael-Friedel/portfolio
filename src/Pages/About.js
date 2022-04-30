import React from 'react';
import style from '../About.module.css';
import { FcCheckmark } from "react-icons/fc";
import antonelladev from '../images/antonelladev.jpeg';
import passeio from '../images/passeio.jpeg';

function About() {
  return (
    <main className={ style.about}>
      <h1 className={style.center}>Sobre mim</h1>
      <article className={style.article}>
        <section>
          <p className={ style.paragraph}>Me chamo Rafael Friedel, tenho 28 anos, estudo desenvolvimento Web pela Trybe. Casado, pai de uma menina maravilhosa chamada Antonella, e atualmente resido em Blumenau - SC. Estou em transição de carreira. Conheci a área de tecnologia na qual me apaixonei, e senti que era isso que gostaria de trabalhar pro resto da vida.</p>
          <img src={ antonelladev } alt='Foto de um bebê dev' className={ style.img}/>
        </section>
        <section>
          <img src={ passeio } alt='Família passeando' className={ style.img } />
          <p className={ style.paragraph}>Tenho como hobby se reunir com família, bater uma bolinha com amigos, e acompanhar notícias no modo em geral. Aos finais de semanas gosto de maratonar séries, e curtir cada etapa do crescimento do meu 'projetinho' de Dev. rsrs</p>
        </section>
      </article>
      <section>
        <h1 className={style.center}>Minhas habilidades</h1>
        <ul className={style.center}>
          <li><FcCheckmark /> Facilidade e vontade em aprender</li>
          <li><FcCheckmark /> Linux</li>
          <li><FcCheckmark /> HTML</li>
          <li><FcCheckmark /> CSS</li>
          <li><FcCheckmark /> Git & GitHub</li>
          <li><FcCheckmark /> JavaScript</li>
          <li><FcCheckmark /> Jest</li>
          <li><FcCheckmark /> React - Componentes de classe e funcionais</li>
          <li><FcCheckmark /> Redux</li>
          <li><FcCheckmark /> RTL</li>
        </ul>
      </section>
    </main>
  );
}

export default About;
