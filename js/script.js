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

  function displayResult(argComputerMove, argPlayerMove){
  const displayResult = function(argComputerMove, argPlayerMove){
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Wygrywasz');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
      printMessage("Remis");
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage("It's a draw!");
    } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('You win!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('You win!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage("It's a draw!");
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'Nieznany ruch'){
    printMessage('Wybierz od 1 do 3');
    } else if(argComputerMove == 'papier' && argPlayerMove == 'Nieznany ruch'){
    printMessage('Wybierz od 1 do 3!');
    } else if(argComputerMove == 'nożyce' && argPlayerMove == 'Nieznany ruch'){
    printMessage('Wybierz od 1 do 3!');
    }
  }
}
