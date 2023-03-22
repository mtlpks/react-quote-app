import React from 'react';
import './QuoteApp.css'

class QuoteApp extends React.Component {
    render() {
      const quoteStyle = {color: this.props.color}
    if (this.props.loading) {
        return
    }
    return (
      <div className='quoteApp' style={quoteStyle}>
        <p id="text">{this.props.randomQuote.quote}</p>
        <p id="author">{this.props.randomQuote.author}</p>
      </div>
    );
  }
}

export default QuoteApp;