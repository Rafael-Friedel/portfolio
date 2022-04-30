import React from 'react';
import { Link } from 'react-router-dom';
import style from '../Header.module.css';

function Header() {
  return (
    <header className={ style.header }>
      <h1>Meu Portfólio</h1>
      <nav>
        <Link to='/portfolio'>
          <button type='button'>Página Inicial</button>
        </Link>
        <Link to='/portfolio/resumo'>
          <button type='button'>Resumo</button>
        </Link>
        <Link to='/portfolio/projetos'>
          <button type='button'>Projetos</button>
        </Link>
        <Link to='/portfolio/sobre'>
          <button type='button'>Sobre</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
