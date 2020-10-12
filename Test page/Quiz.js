window.onload = function(){
  show(0);
}


let questions = [
  {
    id: 1,
  
    question: "How many hours do we have in a day?",
    
    answer: "24 Hours",
    
    options: [
      "24 Hours",
      "34 Hours",
      "12 Hours",
      "22 Hours"
    ]
  },
  
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    id: 4,
    question: "What is the full form of E-mail2",
    answer: "Electronic Mail",
    
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    id: 5,
    question: "What is the full form of E-mail3",
    answer: "Electronic Mail",
    
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    id: 6,
    question: "What is the full form of E-mail4",
    answer: "Electronic Mail",
    
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    id: 7,
    question: "What is the full form of E-mail4",
    answer: "Electronic Mail",
    
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    id: 8,
    question: "What is the full form of E-mail4",
    answer: "Electronic Mail",
    
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    id: 9,
    question: "What is the full form of E-mail4",
    answer: "Electronic Mail",
    
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },

  {
    id: 10,
    question: "What is the full form of E-mail4",
    answer: "Electronic Mail",
    
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];


let question_count = 0;
let point = 0;


function next() {
  

  let user_answer = document.querySelector("li.option.active").innerHTML;
  

  // check ans by the user
  if (user_answer == questions[question_count].answer){
    point +=2;
    sessionStorage.setItem("points",point);
  }


  if(question_count == questions.length - 1){
  	sessionStorage.setItem("time" , `${minutes} minutes and ${seconds} seconds`);
  	clearInterval(mytime);
    location.href = "../Test page/end/end.html";
    return;
  }



  question_count++;
  show(question_count);
}

function show(count){
  let question = document.getElementById("questions");

  // question.innerHTML = "<h2>" + questions[count].question + "</h2>";
  question.innerHTML = `
  <h2>Q${question_count+1}. ${questions[count].question}</h2>
  <ul class="group">
    <li class="option">${questions[count].options[0]}</li>
    <li class="option">${questions[count].options[1]}</li>
    <li class="option">${questions[count].options[2]}</li>
    <li class="option">${questions[count].options[3]}</li>
  </ul>
  `;

  toggleActive()

}

function toggleActive(){
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function(){
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active"))  {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    }
  }
}