var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");

var question = {
  options: [
    ["Jesus has 2 different souls", "Two natures were united in One person which was Jesus. (Hypostatic Union) Jesus was truly God and truly man which means he had two different souls."],
    ["Jesus only has 1 divine soul", "If this was true, He wouldn't have faced human struggles and furthermore he couldn't have been the sacrifice for our sins. Being able to distinguish Heresies is important since it compromises the gospel completely."],
    ["Jesus has a soul that is neither completely man or God","Jesus was not partially man or partially God. Becoming man did not take away from his divine nature. Being able to distinguish Heresies is important since it compromises the gospel completely."]
  ],
  solution: "option1",
};

option1.innerText = question.options[0][0];
option2.innerText = question.options[1][0];
option3.innerText = question.options[2][0];

var options = [option1, option2, option3];


function check(element) {
  id = element.id;
  const index = options.indexOf(element);
  if (id == question.solution) {
    element.style.color = '#009900';
    element.className = "finished";
    explanation.innerText = question.options[index][1];
    options.splice(index, 1);
    options.forEach(function(z) { 
        z.style.color = '#d73f3f';
        z.className = "finished";
    });
  } else {
      element.style.color = '#d73f3f';
      element.className = "finished";
      explanation.innerText = question.options[index][1];
      var y = document.getElementById("retry");
      y.style.display = "block";
      options.forEach(function(z) { 
        z.className = "finished";
    });    
  }
}

function button(element) {
  check(element);
  var x = document.getElementById("explanation");
  x.style.display = "block";
  var line = document.getElementById('line');
  line.style.display = 'block';
}
