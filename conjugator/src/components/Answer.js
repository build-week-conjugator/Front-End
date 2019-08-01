import React from 'react';
import { connect } from 'react-redux';
import { getWord } from '../actions'

class Answear extends React.Component {
    constructor() {
    super();
        this.state = {
            answer: '',
            rightwrong: '',
            typed: false,
            clicked: false,
        };
    }

    answerQuestion = event => {
        this.setState({ answer: event.target.value })
    }

    submitQuestion = (evt) => {
        evt.preventDefault()
        const rightAnswer = this.props.word.answer;
        this.setState({
            typed: true,
            clicked: true,
        })
        if (this.state.answer === rightAnswer) {
            this.setState({
                rightwrong: true,
            })
        }
        else {
            this.setState({
                rightwrong: false,
            })
        }
    }

    nextVerb = () => {
        this.setState({
            answer: '',
            rightwrong: '',
            typed: false,
            clicked: false,
        })
            this.props.getWord()
    }

    enterá = () => {
        this.setState({
            answer: this.state.answer.concat('á'),
        })
    }

    enteré = () => {
        this.setState({
            answer: this.state.answer.concat('é'),
        })
    }

    enterí = () => {
        this.setState({
            answer: this.state.answer.concat('í'),
        })
    }

    enterñ = () => {
        this.setState({
            answer: this.state.answer.concat('ñ'),
        })
    }

    enteró = () => {
        this.setState({
            answer: this.state.answer.concat('ó'),
        })
    }

    enterú = () => {
        this.setState({
            answer: this.state.answer.concat('ú'),
        })
    }

    render () {
        return (
            <div>
                <form onSubmit={this.submitQuestion}>{this.props.word.form}
                    <input
                        type= "text"
                        value={this.state.answer}
                        onChange={this.answerQuestion}
                        placeholder="answer"
                        name="answer"    
                    />

                    {this.state.typed && this.state.rightwrong && <p>Right answer! </p>}
                    {this.state.typed && !this.state.rightwrong && <p>False, the correct answer is {this.props.word.answer}. </p>}

                    <br/>

                    <button type="button" onClick={this.enterá}>á</button><button type="button" onClick={this.enteré}>é</button><button type="button" onClick={this.enterí}>í</button><button type="button" onClick={this.enterñ}>ñ</button><button type="button" onClick={this.enteró}>ó</button><button type="button" onClick={this.enterú}>ú</button>

                    {!this.state.clicked && <div><button type='submit'> Subimit </button></div>}
                </form>
                {this.state.clicked && <div><button type='button' onClick={this.nextVerb}> Next Verb </button></div>}
                    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        word: state.word,
    }
}

const mapDispatchToProps = {
	getWord,
}

export default connect(mapStateToProps, mapDispatchToProps)(Answear)