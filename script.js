document.getElementById('nameForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const inputNames = document.getElementById('nameInput').value.split(',').map(name => name.trim());
    const randomNames = shuffleArray(inputNames);
    displayRandomNames(randomNames);
  });
  
  function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function displayRandomNames(names) {
    const outputElement = document.getElementById('randomNames');
    outputElement.innerHTML = '<p>Random Order:</p><ol>';
    names.forEach((name, index) => {
        outputElement.innerHTML += `<li>${index + 1}. ${name}</li>`;
    });
    outputElement.innerHTML += '</ol>';
}

  
