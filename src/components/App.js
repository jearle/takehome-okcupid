import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { 
  setAnswer,
  generateEssay,
  showEditScreen,
  setEssayText,
  resetToInitialState,
} from '../madlibs';

import Edit from './Edit';
import Prompts from './Prompts';
import GeneratedEssay from './GeneratedEssay';

require('./App.scss');

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf(PropTypes.shape({
      fieldName: PropTypes.string.isRequired,
      copy: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })).isRequired,
  };

  handlePromptsOnChange = (fieldName, answer) => {
    const {
      dispatch,
    } = this.props;

    dispatch(setAnswer({
      fieldName, 
      answer,
    }));
  }

  handlePromptsOnBlur = (fieldName) => {
    const {
      dispatch,
    } = this.props;

    dispatch(generateEssay({ fieldName }));
  }

  handleOnEditButtonClick = () => {
    const {
      dispatch,
    } = this.props;

    dispatch(showEditScreen());
  }

  handleOnEssayTextChange = (essayText) => {
    const {
      dispatch,
    } = this.props;

    dispatch(setEssayText({ essayText }));
  }

  handleOnStartOver = () => {
    const {
      dispatch,
    } = this.props;

    dispatch(resetToInitialState());
  }

  render() {
    const {
      fields,
      essayText,
      shouldShowEditButton,
      shouldShowEditScreen,
    } = this.props;
    
    if (shouldShowEditScreen) {
      return (
        <div className="matchArea">
          <Edit
            essayText={essayText}
            onChange={this.handleOnEssayTextChange}
            onStartOver={this.handleOnStartOver}
          />
        </div>
      );
    }

    return (
      <div className="matchArea">
        <Prompts 
          fields={fields}
          onChange={this.handlePromptsOnChange}
          onBlur={this.handlePromptsOnBlur}
        />
        <GeneratedEssay
          essayText={essayText}
          shouldShowEditButton={shouldShowEditButton}
          onEditButtonClick={this.handleOnEditButtonClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
