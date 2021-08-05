const buttonRock, buttonPaper, buttonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    } printMessage('Nie znam ruchu o id' + argMoveId + '.');
    return 'Nieznany ruch';
    }

  const displayResult = function(argComputerMove, argPlayerMove){
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrywasz');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage('Remis');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Wygrywasz');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Wygrywasz');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'Nieznany ruch'){
    printMessage('Wybierz od 1 do 3');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'Nieznany ruch'){
    printMessage('Wybierz od 1 do 3!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'Nieznany ruch'){
    printMessage('Wybierz od 1 do 3!');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    };
  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
buttonRock.addEventListener('click', function(){ buttonClicked('kamień');});
buttonPaper.addEventListener('click', function(){ buttonClicked('papier');});
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
