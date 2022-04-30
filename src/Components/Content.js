import React from 'react';
import About from '../Pages/About'
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Resume from '../Pages/Resume';
import { Switch, Route } from 'react-router-dom';

function Content(){
  return(
      <Switch>
        <Route path="/portfolio/sobre" component={ About } />
        <Route path="/portfolio/resumo" render={ () => <Resume />} />
        <Route path="/portfolio/projetos" component={ Projects } />
        <Route exact path="/portfolio" component={ Home } />
      </Switch>
  );
}

export default Content;
