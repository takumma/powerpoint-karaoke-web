import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Top from './components/Top';
import Slide from './components/Slide';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {orange, lightBlue} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[800],
    },
    secondary: {
      main: lightBlue[600],
    },
  },
  typography: {
    fontFamily: "'Kosugi Maru', sans-serif",
  }
});

class App extends React.Component<{}, {}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router basename={process.env.PUBLIC_URL}>
            <div>
              <Route exact path="/" component={Top}/>
              <Route exact path="/slide" component={Slide}/>
            </div>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
