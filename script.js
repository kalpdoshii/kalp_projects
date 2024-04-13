function tossCoin() {
    var result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    document.getElementById('result').innerText = 'Result: ' + result;
    
    var coin = document.getElementById('coin');
    coin.style.transform = 'rotateX(720deg)';
    
    setTimeout(function() {
      coin.style.transform = 'rotateX(0deg)';
    }, 1000);
  }
  