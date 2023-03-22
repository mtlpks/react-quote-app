import React from 'react';
import Wrapper from './components/Wrapper'
import QuoteApp from './components/QuoteApp'
import './App.css'

class App extends React.Component {
  async loadQuotes() {
    const response = await fetch(
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    );
    const quotesArr = await response.json();
    return this.selectRandomQuote(quotesArr)
  }
  selectRandomQuote(quotesArr) {
    const randomQuote = quotesArr.quotes[Math.floor(Math.random() * quotesArr.quotes.length)];
    return randomQuote;
  }

  
  state = {
    randomQuote: null,
    loading: true,
    color: ''
  }

  async componentDidMount() {
    const randomQuote = await this.loadQuotes()
    this.setState({
        loading: false,
        randomQuote
    })
}
  handleNewQuoteClick = async() => {
    this.setState({
      loading: true
    });
    const randomQuote = await this.loadQuotes();
    const possibleColors = ['#f99d12', '#e19059', '#f64447', '#f65a77', '#f738ff', '#7b13de']
    const currentColor = possibleColors[Math.floor(Math.random() * possibleColors.length)]
    this.setState({
      randomQuote, loading: false, color: currentColor
    })
  }

  render() {
    const {loading, randomQuote, color} = this.state
    const appStyle = {backgroundColor:color}
    const buttonStyle = {color:color}
  return (
    <div className="App" style={appStyle}>
      <Wrapper>
        <div className='buttonDiv'>
          <button value={'tumblr'} ><i style={buttonStyle} class="fa-brands fa-tumblr"></i></button>
          <button value={'twitter'} ><i style={buttonStyle} class="fa-brands fa-twitter"></i></button>
          <button style={buttonStyle} value={'new-quote'} onClick={this.handleNewQuoteClick} >New quote</button>
        </div>
        <QuoteApp randomQuote={randomQuote} loading={loading} color={color}/>
        <h5 id='credits'>Made by Matheus Leopoldo - mtlpks</h5>
      </Wrapper>
      
    </div>
  );
}
}

export default App;
