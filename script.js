function inputAnswer(){
  var response = prompt("你的最终答案是")
    if(response === "16"){
      alert("Congratulations!You are right!");
    }
    else{
      alert("Sorry,guess again please!")
    }
  }

function getPrompt(){
  alert("每一种图形代表一个数字，通过前三个等式计算出三种图形的数值，最后计算得出答案")
}
