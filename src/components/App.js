import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { 
  setAnswer,
  generateEssay,
} from '../madlibs';

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

  render() {
    const {
      fields,
      essayText,
    } = this.props;

    return (
      <div className="matchArea">
        <Prompts 
          fields={fields}
          onChange={this.handlePromptsOnChange}
          onBlur={this.handlePromptsOnBlur}
        />
        <GeneratedEssay
          essayText={essayText}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
