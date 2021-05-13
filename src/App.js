import { connect } from "react-redux";
import { getQuote } from "./state/actionCreators";

const App = ({ selected, getNewQuote }) => {
  const { quote, author } = selected;
  return <div className="App"></div>;
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
