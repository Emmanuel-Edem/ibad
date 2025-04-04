  const translations = {
    1: 'kied',
    2: 'iba',
    3: 'ita',
    // Add more mappings as needed
  };

  function translateNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    const translation = translations[numberInput];

    if (translation) {
      resultDiv.textContent = `Translation: ${translation}`;
    } else {
      resultDiv.textContent = 'Translation not found.';
    }
  }
