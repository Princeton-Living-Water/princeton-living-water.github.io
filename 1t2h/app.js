var option1=document.getElementById('option1');
var option2=document.getElementById('option2');
var option3=document.getElementById('option3');
var clicked=false;

var question = {
    options: [
      'The Son is always subordinate to the Father', 
      'God is the Father, the Son, and the Holy Spirit but each are different persons', 
      'The Father, Son, and Holy Spirit are all the same and equally God'
    ],
    solution: 'option2',
    explanation: 'The Son is equally God and was subordinate to the Father while in the flesh to represent the relationship between humans and God but since he is fully God and fully human he is not subordinate to the Father forever. The Father, Son, and Holy Spirit are distinct persons but all equally God. Hence Option 2 is correct.'
  }

option1.innerHTML=question.options[0];
option2.innerHTML=question.options[1];
option3.innerHTML=question.options[2];
explanation.innerHTML=question.explanation;

function check(element){
  id = element.id;
  var remaining = question.options.slice();
  const index = remaining.indexOf(element.innerHTML.toString());
    if (id==question.solution){
      element.style.backgroundColor = '#9acd32';
      element.className='finished';
      remaining.splice(index, 1);
      for (i = 0; i < remaining.length; i++){
        if(option1.innerHTML==remaining[i]){
          option1.style.backgroundColor = '#ff4500';
          option1.className='finished';
        }
        if (option2.innerHTML==remaining[i]){
          option2.style.backgroundColor = '#ff4500';
          option2.className='finished';
        }
        if (option3.innerHTML==remaining[i]){
          option3.style.backgroundColor = '#ff4500';
          option3.className='finished';
        }
      }
    }
    else{
      /* 
      question.solution = 'option2'
      document.getElementById(question.solution)/objsoln = option2
      objsoln.innerHTML = 'Jesus is the Savior'
      */
      element.style.backgroundColor = '#ff4500';
      element.className='finished';
      remaining.splice(index, 1);

      var objsoln = document.getElementById(question.solution);
      objsoln.style.backgroundColor = '#9acd32';
      objsoln.className='finished';
      const sol = remaining.indexOf(objsoln.innerHTML);
      remaining.splice(sol, 1);
      
      if(option1.innerHTML==remaining[0]){
        option1.style.backgroundColor = '#ff4500';
        option1.className='finished';
      }
      if (option2.innerHTML==remaining[0]){
        option2.style.backgroundColor = '#ff4500';
        option2.className='finished';
      }
      if (option3.innerHTML==remaining[0]){
        option3.style.backgroundColor = '#ff4500';
        option3.className='finished';
      }
    }
}

function button(element){
  clicked = true;
  check(element);
  var x = document.getElementById('explanation');
  x.style.display = 'block';
}