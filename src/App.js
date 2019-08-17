import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
//* Pages
import Homepage from './pages/Homepage';
import Userpage from './pages/Userpage';
import SinglePhotopage from './pages/SinglePhotopage';
//* Components
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <div className="App">
            <Navigation />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/user/:username" component={Userpage} />
                <Route exact path="/photo/:id" component={SinglePhotopage} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
