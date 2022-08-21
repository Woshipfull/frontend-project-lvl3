/* eslint-disable no-param-reassign */
import 'bootstrap/dist/css/bootstrap.min.css';
import onChange from 'on-change';
import * as yup from 'yup';
import render from './view.js';

const elements = {
  alarm: document.querySelector('.text-danger'),
  container: document.querySelector('.container-xxl'),
  form: document.querySelector('form'),
  urlInput: document.querySelector('#url-input'),
};

const state = onChange({
  form: {
    valid: false,
    processState: 'filling',
    processError: null,
    fields: {
      url: '',
      validError: '',
    },
  },
}, render(elements));

const schema = yup.string().url();
const validate = (string) => schema.validate(string)
  .then((data) => {
    state.form.fields.url = data;
    state.form.fields.validError = '';
  })
  .catch((err) => {
    state.form.fields.url = '';
    state.form.fields.validError = err;
  });

elements.form.addEventListener('submit', (e) => {
  e.preventDefault();

  validate(elements.urlInput.value);
});
