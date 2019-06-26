import React, { Component,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HydrogenAtom from './scenes/hydrogenAtom/components/HydrogenAtom';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <HydrogenAtom/>
        );
    }
}


export default App;
