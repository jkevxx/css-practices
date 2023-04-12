const form = document.querySelector('.task-inputs-form');

const backgroundContainer = document.querySelector('.bg-container');

form.addEventListener('click', () => {
  form.classList.add('active-form');
});

backgroundContainer.addEventListener('click', () => {
  // console.log('hi');
  form.classList.remove('active-form');
});
