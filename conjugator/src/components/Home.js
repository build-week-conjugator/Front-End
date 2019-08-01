import React from 'react';
import './css/home.css';
import { getWord } from '../actions'
import { connect } from 'react-redux';
import WordVerb from './WordVerb';
import WordTense from './WordTense';
import Answear from './Answer';

class Home extends React.Component {
    componentDidMount() {
        this.props.getWord()
    }

    render() {
        return (
            <div className='home-content'>
                <h2>Conjugator</h2>

                <div className='home-record'>
                    <span>current streak: 0</span>
                    <span>best streak: 0</span>
                    <span>percentage: 0%</span>
                </div>

                <br/>
                <div className='home-verbs'>
                    <WordVerb word={this.props.word}/>

                    <WordTense word= {this.props.word}/>

                    <Answear />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        word: state.word,
        isLoading: state.isLoading,
    }
}

const mapDispatchToProps = {
	getWord,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)