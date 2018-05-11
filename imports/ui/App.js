import React, { Fragment } from 'react';
import { MuiThemeProvider } from 'material-ui';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';

import theme from './theme';
import FindVesselPage from './pages/FindVesselPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

const App = () => (
  <Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <Header />
          <div className="content">
            <Switch>
              <Route exact path="/" component={FindVesselPage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </MuiThemeProvider>
  </Fragment>
);

export default App;
