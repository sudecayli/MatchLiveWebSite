function increaseScore (teamName) {
    const scoreId = `score${teamName}`
    const scoreElement = document.getElementById(scoreId)
    let score = parseInt(scoreElement.textContent)
    scoreElement.textContent = ++score 
   }
  
   function decreaseScore (teamName){
      const scoreId = `score${teamName}`
      const scoreElement = document.getElementById(scoreId)
     
      
      let score = parseInt(scoreElement.textContent)
       if (score <= 0)  {
          alert("The score cannot be less than zero anyway!")
           score = 0
  
       }
  
        else {
        scoreElement.textContent = --score
      }
  }
  
  const element = document.getElementById("resetbtnA");
  element.addEventListener("click", myFunction);
  
  function myFunction() {
    document.getElementById("scoreA").innerText = "0";
  
  }
  const element2 = document.getElementById("resetbtnB");
  element2.addEventListener("click", myFunction2);
  
  function myFunction2() {
    document.getElementById("scoreB").innerText = "0";
  }
  
  function setName(teamName){ 
      let askName = prompt("Enter Your Team Name!" , `Team${teamName}` ) ;
      const nameId = `name${teamName}` ;
      const newName  =  document.getElementById(nameId); 
      (newName.textContent) = askName; 
      
  if (askName === (null || ""))
      (newName.textContent) = `Team${teamName}`
      }    
  
  function teamsCurrentGoal(teamName){
      let askGoal = prompt("What is the Current Goal Count?");
      const scoreId = `score${teamName}` ;
      const scoreElement = document.getElementById(scoreId);
       if(!isNaN(askGoal) && askGoal !== null && askGoal !==""  )
           {
               const askGoalNum = +askGoal
       if (askGoalNum >= 0 && Number.isInteger(askGoalNum)) { 
          
          (scoreElement.textContent) = askGoalNum;
       }
       else{
          alert("Please enter a valid number!")
      }
      }
       else{
  let askGoal2 = "invalid"
  let errorMessage = ""
  let askGoal2Num = Number(askGoal2)
  while (!(askGoal2Num >= 0) ) {
  askGoal2Num = window.prompt(errorMessage + 'What is the Current Goal Count?');
  errorMessage = '"' +  askGoal2Num + '" is not a number. '
  }
  (scoreElement.textContent) = askGoal2Num;
     }
  
  }