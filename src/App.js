import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import NotFoundPage from './components/NotFoundPage';
import About from './components/About/About';

function App() {
  return (
    <>
      <NavBar/>
      <h1>Scott Lingner. Software Engineer.</h1>
      <main className="app">
      <Switch>
        <Route
          exact
          path='/'
          // component={}
        />
        <Route
          exact
          path='/work'
          // component={Work}
        />
        <Route
          exact
          path='/about'
          component={About}
        />
        <Route
          exact
          path='/Contact'
          // component={Contact}
        />
        <Route
          component={NotFoundPage}
        />
      </Switch>
    </main>
    </>
  );
}

export default App;