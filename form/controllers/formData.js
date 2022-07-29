// General Info Inputs
const businessName = document.querySelector('#business-name-input');
const entrepreneurName = document.querySelector('#entrepreneur-name-input');
const businessDocument = document.querySelector('#business-document-input');
const businessDescription = document.querySelector('#business-description-input');
const businessSegment = document.querySelector('#business-segment-input');
// Market Analysis Inputs
const customerDescription = document.querySelector('#customer-description-input');
const customerWhere = document.querySelector('#customer-where-input');
const customerFrequency = document.querySelector('#customer-frequency-input');
const customerFactor = document.querySelector('#customer-factor-input');
const competitorDescription = document.querySelector('#competitor-description-input');
const hasSupplier = document.getElementsByName('has-supplier-input');
//Marketing Plan Inputs
const productDescription = document.querySelector('#product-description-input');
const businessDifferential = document.querySelector('#business-differential-input');
const mainAdvertising = document.querySelector('#main-advertising-input');
const averageUnitPrice = document.querySelector('#average-unit-price-input');
const salesPeriod = document.querySelector('#sales-period-input');
const salesTotal = document.querySelector('#sales-total-input');
//Financial Analysis Inputs
const initialFunding = document.querySelector('#initial-funding-input');
const hasCapital = document.getElementsByName('has-capital-input');
const fundingWay = document.querySelector('#funding-way-input');
const averageUnitCost = document.querySelector('#average-unit-cost-input');
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
      "businessName": businessName.value,
      "entrepreneurName": entrepreneurName.value,
      "businessDocument": businessDocument.value,
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

    // Pegar radio selecionado em hasSupplier
    let hasSupplierValue = ''

    for (let i = 0; i < hasSupplier.length; i++) {
      if (hasSupplier[i].checked) {
        hasSupplierValue = (hasSupplier[i].value);
        break;
      }
    }

  //Transformar as informações inseridas em objeto
  marketAnalysisForm = {
    "customerDescription": customerDescription.value,
    "customerWhere": customerWhere.value,
    "customerFrequency": customerFrequency.value,
    "customerFactor": customerFactor.value,
    "competitorDescription" : competitorDescription.value,
    "hasSupplier" : hasSupplierValue
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
      "averageUnitPrice": averageUnitPrice.value,
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

  let hasCapitalValue = ''
  for (let i = 0; i < hasCapital.length; i++) {
    if (hasCapital[i].checked) {
      hasCapitalValue = (hasCapital[i].value);
      break;
    }
  }

  let fundingWayValue = ''
  if (hasCapitalValue == 'Sim') {
    fundingWayValue = 'Reservas'
  } else {
    fundingWayValue = fundingWay.value
  }
    
console.log('Análise Financeira');

    //Transformar as informações inseridas em objeto
    financialAnalysisForm = {
      "initialFunding": initialFunding.value,
      "hasCapital": hasCapitalValue,
      "fundingWay": fundingWayValue,
      "averageUnitCost": averageUnitCost.value,
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
    {
      "generalInfo": generalInfoForm,
    },
    {
      "marketAnalysis": marketAnalysisForm,
    },
    {
      "marketingPlanForm": marketingPlanForm,
    },
    {
      "financialAnalysisForm": financialAnalysisForm
    }
  ]

console.log(allFormData)

localStorage.setItem("allData",JSON.stringify(allFormData));

console.log('Dados enviados');

}
