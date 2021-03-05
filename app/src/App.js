import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

import { connect } from "react-redux";
import { getCharacters } from "./state/actions";
import CharacterList from "./components/CharacterList";

function App(props) {
  useEffect(() => {
    props.getCharacters();
  }, []);

  return (
    <div className="App">
      <h1> RICK AND MORTY </h1>
      <CharacterList />
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     state,
//   };
// }

// const mapDispatchToProps = {
//   getCharacters: getCharacters,
// };

export default connect(null, { getCharacters })(App);

// export default connect(function, object)(App);
