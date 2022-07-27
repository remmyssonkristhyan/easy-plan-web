const pdfButton = document.querySelector('#pdf-button');
const card = document.querySelector('.card');

let cardStylePDF = {
  "display": "block",
  "margin-left": "40mm",
  "padding": "0",
  "border": "1px solid black",
  "width": "120mm",
  "height": "auto"
}

let cardStyleWeb = {
  "display": "table",
  "margin": "0 auto",
  "margin-left": "auto",
  "padding": "0 5%",
  "border": "1px solid black",
  "width": "auto",
  "height": "auto"
}

pdfButton.addEventListener('click' , (event) => {
  event.preventDefault();


  document.querySelector('#bottom-nav').style.display = 'none';
  Object.assign(card.style, cardStylePDF);

  const doc = new jsPDF();

  html2canvas(document.body, {
    onrendered: function (canvas) {

        let img = canvas.toDataURL("image/png");
        let doc = new jsPDF();
        
        doc.addImage(img, 'JPEG', 2, 2)
        doc.save('EasyPlan.pdf');
    }
  });
  
  document.querySelector('#bottom-nav').style.display = 'block';
  Object.assign(card.style, cardStyleWeb);

});

/*
pdfButton.addEventListener('click' , (event) => {
  event.preventDefault();

  document.querySelector('.card').style.marginLeft = '0px';
  document.querySelector('#bottom-nav').style.display = 'none';

  const doc = new jsPDF();

  html2canvas(document.body, {
    onrendered: function (canvas) {

        let img = canvas.toDataURL("image/png");
        let doc = new jsPDF();
        doc.addImage(img, 'JPEG', 20, 20)
        doc.save('EasyPlan.pdf');
    }
  });
  
  document.querySelector('.card').style.marginLeft = '25%';
  document.querySelector('#bottom-nav').style.display = 'block';

});
*/
