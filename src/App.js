import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HydrogenAtom from './scenes/hydrogenAtom/components/HydrogenAtom';
import Home from './scenes/Home/components/Home';
import NotFound from './scenes/Home/components/NotFound';
import './App.css';
import Footer from './components/Footer';


// -------------------------------------------------------------
class NavigationBar extends Component{
    render(){
        return(
        <Fragment>
        <div className="container-fluid">
            <nav id="navigation-bar" className="navbar navbar-expand-lg fixed-top navbar-toggleable-md navbar-dark bg-dark" style={{ boxShadow: "0 0.5em 0.8em 0 rgba(0, 0, 0, 0.1)"}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <h4  style={{marginBottom:'0em', color:'#AC2B37' }}>DC</h4>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" style={{padding:'1em 0em 1em 1em'}}>Home<span className="sr-only">(current)</span></Link>
                        </li>
                        {/*
                        <li className="nav-item">
                            <Link className="nav-link" to="/pages/hydrogenAtom" style={{padding:'1em 0em 1em 1em'}}>Hydrogen Atom</Link>
                        </li>
                        */}
                    </ul>
                </div>
            </nav>
        </div>
        </Fragment>
        );
    }
}

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
      window.scrollTo(0, 0);
  }

  render() {
    const { 
        component: Component, 
        ...rest 
    } = this.props;

    return <Route {...rest} render={(props) => (
        <Component 
            authenticated={this.props.authenticated} 
            authenticate={async (username, password) => {return await this.props.authenticate(username, password)}} 
            username={this.props.username}
            password={this.props.password}
            {...props} />
        )} />;
  }
}



class App extends Component {

    constructor(props) {
        super(props);
    }
    


    render() {

        return(
        <Fragment>
            <div style={{minHeight:'60em'}}>
                <Router>
                    <Fragment>
                        <NavigationBar/>
                        <div style={{padding:'1.5em'}}/>
                        <Switch>
                            <ScrollToTopRoute path="/pages/hydrogenAtom" component={HydrogenAtom} />
                            <ScrollToTopRoute path ="/404" component={NotFound} />
                            <ScrollToTopRoute path="/" component={Home} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
            <footer>
                <Footer/>
            </footer>
        </Fragment>

        );
    }
}


export default App;
