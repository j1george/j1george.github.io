const table = {
  '105cm': '41.34in',
  '122cm': '48.03in',
  '2cm': '0.79in',
  '70cm': '27.56in',
  '4cm': '1.57in',
  '30cm': '11.81in',
  '300cm': '96in', // orig 118.11in 
  '113cm': '44.49in',
  '87cm': '34.25in',
  '9cm': '3.54in',
  '45cm': '17.72in',
  '6cm': '2.36in',
  '150cm': '59in',
  '2m': '6.56ft',
  '4m': '13.12ft',
  '1.13m': '3.71ft',
  '3m': '9.84ft',
  '1.1m': '3.61ft',
  '0.75m': '2.46ft',
  '150mm': '5.9in',
  '90mm': '3.54in',
  '100mm': '3.94in',
  '20mm': '0.79in',
};

for (const [key, value] of Object.entries(table)) {
  let unit = '';
  let lengthFeet = '';
  let lengthInInches = '';
  if (key.includes('cm')) {
    unit = 'cm';
    lengthInInches = parseFloat(key.replace(unit, '')) * 0.39370;
  } else if (key.includes('mm')) {
    unit = 'mm';
    lengthInInches = parseFloat(key.replace(unit, '')) * 0.039370;
  } else if (key.includes('m')) {
    unit = 'm';
    lengthInInches = parseFloat(key.replace(unit, '')) * 39.37;
  }

  lengthFeet = Math.floor(lengthInInches / 12);
  lengthInInches %= 12;

  document.body.innerHTML = document.body.innerHTML.replaceAll(key, `${lengthFeet}ft${lengthInInches}in`);
  document.body.innerHTML = document.body.innerHTML.replaceAll('5.9in bolt', '150mm bolt');
}
