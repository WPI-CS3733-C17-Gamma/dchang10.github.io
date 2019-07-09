import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../../css/blog.css';
import FeynmanDiagram from '../images/Feynmandiagram.svg';
import Banner from './Banner.js';

class Home extends Component {
    constructor(props) {
        super(props);
        let page = this.props.match.params.page;

        this.state = {
            loaded: false,
            page: page < 1000000 ? (page > 0 ? page : 1) : 1000000,
            status: 200
        };
        this.page = this.state.page;

    }

    render() {

    return (
        <Fragment>
            <div className="container-fluid" >
                <Banner image={FeynmanDiagram}>Under Construction</Banner>
                <div className="row" style={{ zIndex: '2', height: '40em' }}>
                    <div className='col-lg-2' style={{ backgroundColor: '#eeeeee' }} />
                    <div className='col-lg-8' style={{ backgroundColor: '#eeeeee' }}>
                        <div className='row'>
                        </div>
                    </div>
                    <div className='col-lg-2' style={{ backgroundColor: '#eeeeee' }} />
                </div>
            </div>
        </Fragment>
        );
    }
}

export default Home;
