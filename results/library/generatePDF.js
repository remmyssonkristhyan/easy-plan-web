const pdfButton = document.querySelector('#pdf-button');
const cards = document.querySelector('#card-info-container');

pdfButton.addEventListener ('click' , () => {

  window.scrollTo(0,0);     
  html2canvas(cards).then(function(canvas) {
      var img = canvas.toDataURL();
      html2pdf(cards);
  });
  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
});
