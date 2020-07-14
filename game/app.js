var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var click = false;

var question = {
  options: [
    ["In order to have genuine faith, a special set of explanations and books aside from the Bible are necessary to understand the Bible and to develop truth understanding.", "This heretical belief is held by Mormons who believe the Bible is too ambiguous and thus cannot be properly understood without outside help. In actuality, God provided us with sufficient information in scripture to know his Character. Through an exegetical study of scripture, many areas become much more clear. The Bible is the word of God while other books and resources are words from carnal men. God gave us enough in scripture which is the truth. Being able to distinguish Heresies is important since it compromises the gospel completely."],
    ["The Bible is divinely inspired by God and helps us to understand God’s heart but is not inerrant and thus cannot all be taken as truth.", "Claiming that the Bible is divinely inspired but not inherent means that you believe God is wrong and made a mistake. Furthermore, claiming that parts of the Bible seem to be correct while other more controversial topics are not correct due to factors such as the culture at that time puts into question God’s sovereignty. Being able to distinguish Heresies is important since it compromises the gospel completely."],
    ["The Bible is helped and guided by the special gifts of God who are the teachers, preachers, and evangelists who assist in the propagation and interpretation of the Bible.","The purpose of teachers, preachers, and evangelists is to not only share the gospel but also provide the congregation and audience with a proper understanding and grasp of scripture or more specifically God’s character. Being a teacher of the word is not open to everyone but to those who are disciplined and steadfast in the Lord."]
  ],
  solution: "option3",
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
  if (click==false){
  click=true;
    check(element);
  var x = document.getElementById("explanation");
  x.style.display = "block";
  var line = document.getElementById('line');
  line.style.display = 'block';
  }
}
