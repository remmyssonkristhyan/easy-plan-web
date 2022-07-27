// Inputs
const activityInput = document.getElementsByName('activity-input');
const segmentInput = document.getElementsByName('segment-input');
const descriptionInput = document.querySelector('#description-input');
const missionInput = document.querySelector('#mission-input');
// End Form
const saveButton = document.querySelector('#save-button');
const nextButton = document.querySelector('#nextBtn');
const endFormPreviousButton = document.querySelector('#end-form-previous-button');
const planAlert = document.querySelector('#plan-alert');

// Ao clicar o botão de salvar...
nextButton.addEventListener('click', (event) => {
  event.preventDefault();

  console.log('clicou!')

// Pegar os valores marcados das checkbox
  let activityList= '';
  for (let i = 0; i < activityInput.length; i++) {
    if (activityInput[i].checked) {
      activityList += `${activityInput[i].value} / `;
    }
  }
  
  let segmentList= '';
  for (let i in segmentInput) {
    if (segmentInput[i].checked) {
      segmentList += `${segmentInput[i].value} / `;
    }
  }

//Transformar as informações inseridas em objeto
/*
    generalInfoForm = {
    "activity": activityList.slice(0, -3),
    "segment": segmentList.slice(0, -3),
    "description": descriptionInput.value,
    "mission": missionInput.value
  }
*/

  console.log('Dados enviados')

//Armazenar o generalInfoForm no armazenamento local
  localStorage.setItem("generalInfo",JSON.stringify(generalInfoForm));
  


});


