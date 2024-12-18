// Hole das Pop-up und die Schaltflächen
const popup = document.getElementById('popup');
const openPopupBtn = document.getElementById('openPopupBtn');
const openPopupBtn2 = document.getElementById('openPopupBtn2');
const closePopupBtn = document.getElementById('closePopupBtn');

// Funktion zum Öffnen des Pop-ups
function openPopup() {
  popup.style.display = 'flex'; // Setze den Pop-up-Anzeigemodus auf 'flex', um es sichtbar zu machen
}

// Funktion zum Schließen des Pop-ups
function closePopup() {
  popup.style.display = 'none'; // Setze den Pop-up-Anzeigemodus auf 'none', um es zu verstecken
}

// Öffnet das Pop-up, wenn der Button geklickt oder angetippt wird
openPopupBtn.addEventListener('click', openPopup);
openPopupBtn.addEventListener('touchstart', openPopup);  // Event für Touch-Devices

openPopupBtn2.addEventListener('click', openPopup);
openPopupBtn2.addEventListener('touchstart', openPopup);  // Event für Touch-Devices

// Schließt das Pop-up, wenn der Schließbutton geklickt oder angetippt wird
closePopupBtn.addEventListener('click', closePopup);
closePopupBtn.addEventListener('touchstart', closePopup);  // Event für Touch-Devices

// Optional: Schließt das Pop-up, wenn der Benutzer außerhalb des Pop-ups klickt oder tippt
window.addEventListener('click', function(event) {
  if (event.target === popup) {
    closePopup();
  }
});

// Füge auch einen Touchstart-Listener für das Schließen des Pop-ups hinzu
window.addEventListener('touchstart', function(event) {
  if (event.target === popup) {
    closePopup();
  }
});
