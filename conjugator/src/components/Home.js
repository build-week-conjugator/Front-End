import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h2>Conjugator</h2>

                <span>current streak:</span>
                <span>best streak:</span>
                <span>percentage:</span>

                <br/>

                <div>Verb:</div>

                <div>Tense:</div>

                <button>Submit</button>
            </div>
        )
    }
}

export default Home;