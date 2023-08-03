const form = document.getElementById('questionForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();


  const comprehensionAnswer = form.elements['comprehensionAnswer'].value;
  const clozeAnswer = form.elements['clozeAnswer'].value;
  const categoryAnswer = form.elements['category'].value;

  
  const answers = {
    comprehensionAnswer,
    clozeAnswer,
    categoryAnswer,
  };


  console.log(answers);
  form.reset();
});