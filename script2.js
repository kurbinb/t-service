// Hole das Pop-up und die Schaltflächen
const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('openPopupBtn');
const openPopupBtn2 = document.getElementById('openPopupBtn2');

const closePopupBtn = document.getElementById('closePopupBtn');

// Öffnet das Pop-up, wenn der Button geklickt wird
openPopupBtn.addEventListener('click', function() {
  popup.style.display = 'flex'; // Setze den Pop-up-Anzeigemodus auf 'flex', um es sichtbar zu machen
});

openPopupBtn2.addEventListener('click', function() {
  popup.style.display = 'flex'; // Setze den Pop-up-Anzeigemodus auf 'flex', um es sichtbar zu machen
});

// Schließt das Pop-up, wenn der Schließbutton geklickt wird
closePopupBtn.addEventListener('click', function() {
  popup.style.display = 'none'; // Setze den Pop-up-Anzeigemodus auf 'none', um es zu verstecken
});

// Optional: Schließt das Pop-up, wenn der Benutzer außerhalb des Pop-ups klickt
window.addEventListener('click', function(event) {
  if (event.target === popup) {
    popup.style.display = 'none'; // Versteckt das Pop-up, wenn der Benutzer außerhalb des Fensters klickt
  }
});
