const radios = document.querySelectorAll('input')
const needCapital = document.getElementsByName('need-capital-input');
const howCapitalLabel = document.querySelector('#how-capital-label');
const howCapital = document.querySelector('#how-capital-input');

//HowCapital on/off
for (const radio of radios) {
  radio.onclick = (current) => {
    console.log(current.target.value)
    console.log('mudou')
    if (current.target.value == 'Não') {
      howCapitalLabel.style.display = "block"
      howCapital.style.display = "block"
    } else {
      howCapitalLabel.style.display = "none"
      howCapital.style.display = "none"
    }
  };
}


//FORM CONFIG
let currentTab = 0;
showTab(currentTab);

function showTab(current) {
  let tab = document.getElementsByClassName("tab");

  tab[current].style.display = "block";
  if (current == 0) {
    document.getElementById("previous-button").style.display = "none";
  } else {
    document.getElementById("previous-button").style.display = "inline";
  }
  if (current == (tab.length - 1)) {
    document.getElementById("warning-message").style.display = "block";
    document.getElementById("next-button").innerHTML = "Enviar";
  } else {
    document.getElementById("warning-message").style.display = "none";
    document.getElementById("next-button").innerHTML = "Próximo";
  }
  fixStepIndicator(current)
}

function nextPrevious(n) {
  let tab = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;
  tab[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= tab.length) {
    window.location.href = "../../results/page/result.html";
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  let valid = true;
  const tab = document.getElementsByClassName("tab");
  const input = tab[currentTab].getElementsByTagName("input");

  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      input[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(current) {
  const step = document.getElementsByClassName("step");

  for (let i = 0; i < step.length; i++) {
    step[i].className = step[i].className.replace(" active", "");
  }
  step[current].className += " active";
}
