import {
  takeLatest,
  select,
  put,
} from 'redux-saga/effects';

import {
  GENERATE_ESSAY,
  SET_ESSAY_TEXT_SENTENCE,

  setEssayTextSentence,
  setEssayText,
} from './madlibs';

import {
  getTextTemplate,
} from './constants';


// Helpers
// ----------------------------------------------------------------------------

const getRandomIndexWithLength = (length) => 
  Math.floor(Math.random() * length);

const getRandomItemFromArray = (array) => 
  array[getRandomIndexWithLength(array.length)];

const addAnswerToTemplate = (template, answer) =>
  template.replace(/\$answer/, answer);

const getAnswerWithFieldName = (fields, fieldName) => fields
  .reduce((current, field) => field.fieldName === fieldName ? field.answer : current, '');

const getFieldIndexWithFieldName = (fields, fieldName) => fields
  .reduce((current, field, i) => field.fieldName === fieldName ? i : current, -1);


// Action sagas
// ----------------------------------------------------------------------------

export function* setEssayTextSentenceSaga(action) {
  const {
    fieldName,
  } = action.payload;

  const {
    fields,
  } = yield select((state) => state);

  const answer = getAnswerWithFieldName(fields, fieldName);
  const template = getRandomItemFromArray(getTextTemplate(fieldName));

  const index = getFieldIndexWithFieldName(fields, fieldName);
  const essayTextSentence = addAnswerToTemplate(template, answer);

  yield put(setEssayTextSentence({
    essayTextSentence,
    index,
  }));
}

export function* setEssaySaga() {
  const {
    essayTextSentences,
  } = yield select((state) => state);

  const essayText = essayTextSentences.join(' ');

  yield put(setEssayText({ essayText }));
}

// Listener Sagas
// ----------------------------------------------------------------------------

export function* takeLatestGenerateEssaySaga() {
  yield takeLatest(GENERATE_ESSAY, setEssayTextSentenceSaga);
}

export function* takeLatestSetEssayTextSentenceSaga() {
  yield takeLatest(SET_ESSAY_TEXT_SENTENCE, setEssaySaga);
}


export default [
  takeLatestGenerateEssaySaga,
  takeLatestSetEssayTextSentenceSaga,
];