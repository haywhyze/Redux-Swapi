import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchCharacters } from '../actions';
// import actions

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.fetchCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<h1>loading...</h1>)
    }
    if (this.props.error) {
      // return something here to indicate that you are fetching data
      return (<h1>{this.props.error}</h1>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters || []} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
  };
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchCharacters,
  }
)(CharacterListView);
