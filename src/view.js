export default () => {
  const header = document.querySelector('.header');
  header.classList.add('container');

  const divEl = document.createElement('div');
  const h1El = document.createElement('h1');
  h1El.textContent = 'RSS агрегатор';

  const formEl = document.createElement('form');
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('name', 'link');
  textInput.setAttribute('value', 'Add link');
  const formButton = document.createElement('input');
  formButton.setAttribute('type', 'submit');
  formButton.setAttribute('name', 'submit');
  formButton.setAttribute('value', 'Send');
  formButton.classList.add('btn', 'btn-info');
  formEl.append(textInput, formButton);
  divEl.append(h1El, formEl);
  header.append(divEl);
};
