import { connect } from "react-redux";
import { getQuote } from "./state/actionCreators";

const App = ({ selected, getNewQuote }) => {
  const { quote, author } = selected;
  return (
    <div className="App">
      <div className="container">
        <div className="quote-container" id="quote-box">
          <section className="quote" id="text">
            {quote}
          </section>
          <section className="author" id="author">
            &mdash; {author}
          </section>
          <section className="quote-footer">
            <section className="social-media">
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text="${quote} ${author}`}
                class="twitter-share-button"
                data-dnt="true"
                data-show-count="false">
                Tweet
              </a>
            </section>
            <section className="new-quote" id="new-quote">
              <form onSubmit={getNewQuote}>
                <button type="submit">New quote</button>
              </form>
            </section>
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
