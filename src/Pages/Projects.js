import React from "react";
import style from "../Project.module.css";

function Projects() {
  return (
    <main>
      <header className={style.center}>
        <h1>Projetos Desenvolvidos</h1>
      </header>
      <section className={style.projects}>
        <ul>
          <h4>Fundamentos</h4>
          <li>Project Lessons learned</li>
          <li>Project Playground Functions</li>
          <li>Project Pixel Art</li>
          <li>Project To do List</li>
          <li>Project Mystery Letter</li>
          <li>Project Meme Generator</li>
          <li>Project Color guess</li>
          <li>Project Trybewarts</li>
          <li>Project Zoo functions</li>
          <li>Project Shopping Cart</li>
        </ul>

        <ul>
          <h4>Front-End</h4>
          <li>Project Solar System</li>
          <li>Project Tryunfo</li>
          <li>Project Trybe Tunes</li>
          <li>Project Front-End Online Store(Grupo)</li>
          <li>Project Trybewallet</li>
          <li>Project Trivia Game(Grupo)</li>
          <li>Project Star Wars</li>
          <li>Project Recipes App</li>
        </ul>
      </section>
    </main>
  );
}

export default Projects;
