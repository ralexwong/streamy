import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './components/streams/StreamCreate'
import StreamEdit from './components/streams/StreamEdit'
import StreamDelete from './components/streams/StreamDelete'
import StreamList from './components/streams/StreamList'
import StreamShow from './components/streams/StreamShow'

import Header from './components/Header'
import history from './history';


const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} /> 
          <Route exact path='/streams/edit/:id' component={StreamEdit} /> 
          <Route exact path='/streams/delete/:id' component={StreamDelete} /> 
          <Route exact path='/streams/:id' component={StreamShow} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
