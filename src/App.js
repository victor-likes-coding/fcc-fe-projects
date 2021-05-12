import { connect } from "react-redux";
import { getQuote } from "./state/actionCreators";

const App = ({ selected, getNewQuote }) => {
  const { quote, author } = selected;
  return (
    <div className="App">
      <div className="container">
        <div className="quote-container">
          <section className="quote">{quote}</section>
          <section className="author">&mdash; {author}</section>
          <section className="social-media"></section>
          <section className="new-quote">
            <form onSubmit={getNewQuote}>
              <button type="submit">Get quote</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ selected }) => {
  return {
    selected,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewQuote: (event) => {
      event.preventDefault();
      dispatch(getQuote());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
