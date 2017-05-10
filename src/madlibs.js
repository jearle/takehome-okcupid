import {
  FIELD_NAMES,
  COPY,
} from './constants';


// Helpers
// ----------------------------------------------------------------------------

const getOrderedFieldNames = () => [
  FIELD_NAMES.hometown,
  FIELD_NAMES.favoriteFood,
  FIELD_NAMES.loveToDo,
  FIELD_NAMES.music,
  FIELD_NAMES.messageIf,
  FIELD_NAMES.bar,
];

const generateOrderedFields = () => getOrderedFieldNames()
  .map((field) => ({
    fieldName: field,
    copy: COPY[field],
    answer: '',
  }));


// Action types
// ----------------------------------------------------------------------------

export const SET_ANSWER = 'MADLIBS.SET_ANSWER';
export const GENERATE_ESSAY = 'MADLIBS.GENERATE_ESSAY';
export const SET_ESSAY_TEXT_SENTENCE = 'MADLIBS.SET_ESSAY_TEXT_SENTENCE';
export const SET_ESSAY_TEXT = 'MADLIBS.SET_ESSAY_TEXT';
export const SHOW_EDIT_SCREEN = 'MADLIBS.SHOW_EDIT_SCREEN';
export const RESET_TO_INITIAL_STATE = 'MADLIBS.RESET_TO_INITIAL_STATE';


// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fields: generateOrderedFields(),

  essayText: '',
  essayTextSentences: new Array(getOrderedFieldNames().length).fill(''),

  shouldShowEditButton: false,
  shouldShowEditScreen: false,
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ANSWER: {
      return {
        ...state,
        fields: state.fields.map((field) => 
          field.fieldName === action.payload.fieldName ? 
            {
              ...field,
              answer: action.payload.answer,
            } : field),
      };
    }

    case SET_ESSAY_TEXT_SENTENCE: {
      return {
        ...state,
        essayTextSentences: state
          .essayTextSentences
          .map((sentence, i) => i === action.payload.index ? 
            action.payload.essayTextSentence : 
            sentence),
      };
    }

    case SET_ESSAY_TEXT: {
      return {
        ...state,
        essayText: action.payload.essayText,
        shouldShowEditButton: state
          .essayTextSentences
          .reduce((current, next) => current === false ? false : (next.length > 0), true),
      };
    }

    case SHOW_EDIT_SCREEN: {
      return {
        ...state,
        shouldShowEditScreen: true,
      };
    }

    case RESET_TO_INITIAL_STATE: {
      return INITIAL_STATE;
    }

    default:
      return state;
  }
}


// Action creators
// ----------------------------------------------------------------------------

export const setAnswer = ({ fieldName, answer }) => ({
  type: SET_ANSWER,
  payload: {
    fieldName,
    answer,
  },
});

export const generateEssay = ({ fieldName }) => ({
  type: GENERATE_ESSAY,
  payload: {
    fieldName,
  },
});

export const setEssayTextSentence = ({ essayTextSentence, index }) => ({
  type: SET_ESSAY_TEXT_SENTENCE,
  payload: {
    essayTextSentence,
    index,
  },
});

export const setEssayText = ({ essayText }) => ({
  type: SET_ESSAY_TEXT,
  payload: {
    essayText,
  },
});

export const showEditScreen = () => ({
  type: SHOW_EDIT_SCREEN,
});


export const resetToInitialState = () => ({
  type: RESET_TO_INITIAL_STATE,
});