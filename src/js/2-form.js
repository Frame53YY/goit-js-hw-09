const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  form.email.value = parsedData.email || '';
  form.message.value = parsedData.message || '';
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
}

form.addEventListener('input', handleForm);
form.addEventListener('submit', handleSubmit);

function handleForm(event) {
  formData.email = event.currentTarget.elements.email.value.trim();
  formData.message = event.currentTarget.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData.email = '';
  formData.message = '';
}
