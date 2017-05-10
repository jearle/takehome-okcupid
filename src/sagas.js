import {
  takeLatest,
  select,
  put,
} from 'redux-saga/effects';

import {
  GENERATE_ESSAY,
  setEssayTextSentence,
} from './madlibs';

import {
  getTextTemplate,
} from './constants';


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


export function* setEssaySaga(action) {
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

export function* takeLatestGenerateEssaySaga() {
  yield takeLatest(GENERATE_ESSAY, setEssaySaga);
}


export default [
  takeLatestGenerateEssaySaga,
];