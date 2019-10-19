import React, {useEffect} from "react";
import Quote from "./Quote";
import { Container } from "semantic-ui-react";
import {connect} from "react-redux"
import {fetchRandomQuote} from "../../actions/quoteActions"

const QuoteDisplay = (props) => {
  useEffect(() => {
    props.fetchRandomQuote()
  }, [props.fetchRandomQuote])
  return <Quote quote={props.quote}></Quote>;
};

let mapStateToProps = state => {
  return {
    quote: state.quotes.currentQuote
  }
}

let mapDispatchToProps = dispatch => {
  return {
    fetchRandomQuote: () => dispatch(fetchRandomQuote())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDisplay);
