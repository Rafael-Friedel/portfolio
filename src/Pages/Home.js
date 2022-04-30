import React from 'react';
import style from '../Home.module.css'
import fotoperfil from '../images/fotoperfil.jpeg'


function Home(){
  return (
    <main className={ style.home }>
      <h1 className={ style.home }>Olá Mundo!!</h1>
      <h2 className={ style.home }>Me chamo Rafael Friedel</h2>
      {/* imagem minha */}
      <img src={ fotoperfil } alt='Foto de Rafael' className={style.img}/>
      <p className={ style.home }>Estudante desenvolvedor web em Trybe | Em transição de carreira</p>
    </main>
  )
}

export default Home;
