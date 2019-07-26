import React from 'react';
import './css/home.css';

class Home extends React.Component {
    render() {
        return (
            <div className='home-content'>
                <h2>Conjugator</h2>

                <div className='home-record'>
                    <span>current streak:</span>
                    <span>best streak:</span>
                    <span>percentage:</span>
                </div>

                <br/>
                <div className='home-verbs'>
                    <div>Verb:</div>

                    <div>Tense:</div>
                </div>

                <button className='home-button'>Submit</button>
            </div>
        )
    }
}

export default Home;