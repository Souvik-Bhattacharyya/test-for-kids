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
    question: "Which animal is called King of the jungle?",
    answer: "Lion",
    
    options: [
      "Lion",
      "Tiger",
      "Elephan",
      "Deer"
    ]
  },
  
  {
    id: 3,
    question: "What are the vowels of the English alphabet?",
    answer: "A, E, I, O, U",
    
    options: [
      "A, B, C, D, E",
      "A, S, D, F, J",
      "A, E, I, O, U",
      "None of these"
    ]
  },

  {
    id: 4,
    question: "What is the capital of India?",
    answer: "New Delhi",
    
    options: [
      "West Bengal",
      "New Delhi",
      "Mumbai",
      "None of these"
    ]
  },

  {
    id: 5,
    question: "The sun sets in the __________?",
    answer: "West",
    
    options: [
      "East",
      "West",
      "North",
      "South"
    ]
  },

  {
    id: 6,
    question: "Rearrange K, I, L, J, M",
    answer: "I, J, K, L, M",
    
    options: [
      "I, M, K, L, J",
      "L, I, M, J, K",
      "I, J, K, L, M",
      "None of these"
    ]
  },

  {
    id: 7,
    question: "What are the colours of a rainbow?",
    answer: "Red, Orange, Green, Blue, Yellow, Indigo, and Violet",
    
    options: [
      "Red, Green, Orange, Blue, Indigo, Violet, and Yellow",
      "Red, Orange, Green, Blue, Yellow, Indigo, and Violet",
      "Red, Orange, Green, Blue, Violet, Indigo, and Yellow",
      "None of these"
    ]
  },

  {
    id: 8,
    question: "How many days do we have in a week?",
    answer: "Seven",
    
    options: [
      "Six",
      "Seven",
      "Eight",
      "Five"
    ]
  },

  {
    id: 9,
    question: "How many letters are there in the English alphabet?",
    answer: "26",
    
    options: [
      "21",
      "36",
      "24",
      "26"
    ]
  },

  {
    id: 10,
    question: "Which animal is known as the ‘Ship of the Desert?’",
    answer: "Camel",
    
    options: [
      "Camel",
      "Deer",
      "Sheep",
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
