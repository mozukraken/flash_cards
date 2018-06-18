(function() {
  'use strict';

  var words = [
    {'en': 'read', 'ja': '読む' },
    {'en': 'write', 'ja': '書く' },
    {'en': 'eat', 'ja': '食べる' },
    {'en': 'run', 'ja': '走る' },
    {'en': 'walk', 'ja': '歩く' }
  ];

  var card = document.getElementById('card');
  card.addEventListener('click', function() {
    flip();
  });

  function flip() {
    card.className = card.className === '' ? 'open' : '';
  }

})();
