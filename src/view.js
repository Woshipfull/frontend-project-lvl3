/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const text = {
  alarm: 'Ссылка должна быть валидным URL',
  success: 'RSS успешно загружен',
  already: 'RSS уже существует',
};

const handleProcessState = (elements, processState) => {
  switch (processState) {
    case 'sent':
      console.log('Sent!');
      break;
    case 'error':
      elements.submitButton.disabled = false;
      break;
    case 'sending':
      elements.submitButton.disabled = true;
      console.log('Sending!!!!');
      break;
    case 'filling':
      elements.submitButton.disabled = false;
      break;
    default:
      throw new Error(`Unknown process state: ${processState}`);
  }
};

const handleProcessError = () => {
  // вывести сообщение о сетевой ошибке
};

const renderError = (elements, error) => {
  const alarmEl = elements.alarm;
  alarmEl.classList.remove('text-success');
  alarmEl.classList.add('text-danger');
  console.log(error === '');
  alarmEl.innerHTML = error === '' ? '' : text.alarm;
};

const render = (elements) => (path, value) => {
  switch (path) {
    case 'form.processState':
      handleProcessState(elements, value);
      break;
    case 'form.processError':
      handleProcessError();
      break;
    case 'form.valid':
      elements.submitButton.disabled = !value;
      break;
    case 'form.fields.validError':
      renderError(elements, value);
      break;
    default:
      break;
  }
};

export default render;
