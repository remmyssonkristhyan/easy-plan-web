//Campos para exibir informações
const activityValue = document.querySelector('#activity-value');
const segmentValue = document.querySelector('#segment-value');
const descriptionValue = document.querySelector('#description-value');
const missionValue = document.querySelector('#mission-value');

//Pegar objeto armazenado
let generalInfoForm = localStorage.getItem("generalInfo");
let generalInfos = JSON.parse(generalInfoForm);

//Exibir informações para o usuário
activityValue.innerHTML = generalInfos.activity;
segmentValue.innerHTML = generalInfos.segment;
descriptionValue.innerHTML = generalInfos.description;
missionValue.innerHTML = generalInfos.mission;

