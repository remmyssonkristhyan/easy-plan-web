// General Info Inputs
const companyName = document.querySelector('#company-name-input');
const entrepreneurName = document.querySelector('#entrepreneur-name-input');
const documentInput = document.querySelector('#document-input');
const businessDescription = document.querySelector('#business-description-input');
const businessSegment = document.querySelector('#business-segment-input');
// Market Analysis Inputs
const customerWho = document.querySelector('#customer-who-input');
const customerWhere = document.querySelector('#customer-where-input');
const customerFrequency = document.querySelector('#customer-frequency-input');
const customerFactor = document.querySelector('#customer-factor-input');
const competitorWho = document.querySelector('#competitor-who-input');
const suppliersHave = document.getElementsByName('suppliers-have-input');
//Marketing Plan Inputs
const productDescription = document.querySelector('#product-description-input');
const businessDifferential = document.querySelector('#business-differential-input');
const mainAdvertising = document.querySelector('#main-advertising-input');
const unitPrice = document.querySelector('#unit-price-input');
const salesPeriod = document.querySelector('#sales-period-input');
const salesTotal = document.querySelector('#sales-total-input');
//Financial Analysis Inputs
const capitalHowMuch = document.querySelector('#capital-how-much-input');
const capitalNeed = document.getElementsByName('need-capital-input');
const capitalHow = document.querySelector('#how-capital-input');
const unitCost = document.querySelector('#unit-cost-input');
const collaboratorCost = document.querySelector('#collaborator-cost-input');
const rentCost = document.querySelector('#rent-cost-input');
const otherCost = document.querySelector('#other-cost-input');
// End Form
const nextButton = document.querySelector('#next-button');
const planAlert = document.querySelector('#plan-alert');

function callToSave(currentTab) {
  console.log('foi!');
  console.log(currentTab);

  if (currentTab === 0) generalInfo();
  if (currentTab === 1) marketAnalysis();
  if (currentTab === 2) marketingPlan();
  if (currentTab === 3) financialAnalysis();
  
}

// SAVE General Info
function generalInfo() {

  console.log('General Info');

    //Transformar as informações inseridas em objeto
    generalInfoForm = {
      "companyName": companyName.value,
      "entrepreneurName": entrepreneurName.value,
      "document": documentInput.value,
      "businessDescription": businessDescription.value,
      "businessSegment" : businessSegment.value
    }
  console.log(generalInfoForm);
  
  //Armazenar o generalInfo no armazenamento local
  localStorage.setItem("generalInfo",JSON.stringify(generalInfoForm));

  console.log('Dados salvos em memória local');
}

// SAVE Market Analysis
function marketAnalysis() {

  console.log('Análise de Mercado');

    // Pegar radio selecionado em suppliersHave
    let suppliersHaveValue = ''

    for (let i = 0; i < suppliersHave.length; i++) {
      if (suppliersHave[i].checked) {
        suppliersHaveValue = (suppliersHave[i].value);
        break;
      }
    }

  //Transformar as informações inseridas em objeto
  marketAnalysisForm = {
    "customerWho": customerWho.value,
    "customerWhere": customerWhere.value,
    "customerFrequency": customerFrequency.value,
    "customerFactor": customerFactor.value,
    "competitorWho" : competitorWho.value,
    "suppliersHave" : suppliersHaveValue
  }
  console.log(marketAnalysisForm);
  
  //Armazenar o generalInfo no armazenamento local
  localStorage.setItem("marketAnalysis",JSON.stringify(marketAnalysisForm));

  console.log('Dados salvos em memória local');
}

//SAVE Marketing Plan
function marketingPlan() {

console.log('Plano de Marketing');

    //Transformar as informações inseridas em objeto
    marketingPlanForm = {
      "productDescription": productDescription.value,
      "businessDifferential": businessDifferential.value,
      "mainAdvertising": mainAdvertising.value,
      "unitPrice": unitPrice.value,
      "salesPeriod": salesPeriod.value,
      "salesTotal" : salesTotal.value
    }
  console.log(marketingPlanForm);
  
  //Armazenar o generalInfo no armazenamento local
  localStorage.setItem("marketingPlan",JSON.stringify(marketingPlanForm));

  console.log('Dados salvos em memória local');
}

//SAVE Financial Analysis
function financialAnalysis() {

  let capitalNeedValue = ''
  for (let i = 0; i < capitalNeed.length; i++) {
    if (capitalNeed[i].checked) {
      capitalNeedValue = (capitalNeed[i].value);
      break;
    }
  }

  let capitalHowValue = ''
  if (capitalNeedValue == 'Sim') {
    capitalHowValue = 'Reservas'
  } else {
    capitalHowValue = capitalHow.value
  }
    
console.log('Análise Financeira');

    //Transformar as informações inseridas em objeto
    financialAnalysisForm = {
      "capitalHowMuch": capitalHowMuch.value,
      "capitalneed": capitalNeedValue,
      "capitalHow": capitalHowValue,
      "unitCost": unitCost.value,
      "collaboratorCost" : collaboratorCost.value,
      "rentCost" : rentCost.value,
      "otherCost" : otherCost.value
    }
  console.log(financialAnalysisForm);
  
//Armazenar o generalInfo no armazenamento local
localStorage.setItem("financialAnalysis",JSON.stringify(financialAnalysisForm));

console.log('Dados salvos em memória local');

saveAllToDatabase();

}
function saveAllToDatabase() {

  let allFormData = [
    generalInfoForm,
    marketAnalysisForm,
    marketingPlanForm,
    financialAnalysisForm
  ]

console.log(allFormData)

console.log('Dados enviados');

}



/* OLD VERSION
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
  generalInfoForm = {
    "activity": activityList.slice(0, -3),
    "segment": segmentList.slice(0, -3),
    "description": descriptionInput.value,
    "mission": missionInput.value
  }
  
  console.log('Dados enviados')
  
  //Armazenar o generalInfoForm no armazenamento local
  localStorage.setItem("generalInfo",JSON.stringify(generalInfoForm));
  
  
  
});

*/