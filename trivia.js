function checkAnswers() {
  let score = 0;  
  
  let q1Selected = document.querySelector('input[name="q1"]:checked');
 
  if (q1Selected !== null && q1Selected.value === "fish") {
    score += 10;  
  }
  let q2Selected = document.querySelector('input[name="q2"]:checked');
 
  if (q2Selected !== null && q2Selected.value === "scythe") {
    score += 10;  
  }
  let q3Selected = document.querySelector('input[name="q3"]:checked');
 
  if (q3Selected !== null && q3Selected.value === "wake") {
    score += 10;  
  }
  
  document.getElementById("score").textContent = "Your score: " + score;
}
