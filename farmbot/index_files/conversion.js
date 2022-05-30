const table = {
  '105cm': '41.34in',
  '122cm': '48.03in',
  '2cm': '0.79in',
  '70cm': '27.56in',
  '4cm': '1.57in',
  '30cm': '11.81in',
  '300cm': '118.11in',
  '113cm': '44.49in',
  '87cm': '34.25in',
  '9cm': '3.54in',
  '45cm': '17.72in',
  '6cm': '2.36in',
  '150cm': '59in',
  '2m': '6.56ft',
  '4m': '13.12ft',
  '1.13m': '3.71ft',
  '3m': '9.84ft'
};

document.body.innerHTML = document.body.innerHTML.replace(/[a-z]/gi, m => table[m]);
