var url = "https://princetonlivingwater.org/devos/day9.txt";

// Parse devo text and place into an object
function parseText(text) {
  let devo = {};
  let lines = text.split(/\r?\n/).filter(x => x !== "");
  let start = lines.indexOf(
    "*** Please read the verses and pray through it before reading our own takes. ***"
  );
  let end = lines.lastIndexOf("Consider");

  devo["title"] = lines[0];
  devo["date"] = lines[1];
  devo["passage"] = lines.slice(2, start);
  devo["content"] = lines.slice(start + 1, end);
  devo["questions"] = lines.slice(end + 1);
  return devo;
}

// Create a DOM element of paragraphs, given an array of lines
function linesToElem(lines) {
  let elem = document.createElement("div");
  for (l of lines) {
    let node = document.createElement("p");
    node.appendChild(document.createTextNode(l));
    elem.appendChild(node);
  }

  return elem;
}

// Fill in current devo
fetch(url).then(function(res) {
  res.text().then(function(text) {
    let devo = parseText(text);

    let header = document.createElement("h3");
    let headerHTML = devo["date"] + "<br/>" + devo["title"];
    header.innerHTML = headerHTML;

    let passage = linesToElem(devo["passage"]);
    let instruction1 = document.createElement("div");
    instruction1.innerHTML =
      "<p><em>Please read the verses and pray through it before reading our own takes.</em></p> <hr/>";
    let content = linesToElem(devo["content"]);
    let instruction2 = document.createElement("div");
    instruction2.innerHTML = "<hr/> <p><em>Consider</em></p>";
    let questions = linesToElem(devo["questions"]);

    // Append all elements to the devo box
    let devoBox = document.getElementById("devo-box");
    devoBox.appendChild(header);
    devoBox.appendChild(passage);
    devoBox.appendChild(instruction1);
    devoBox.appendChild(content);
    devoBox.appendChild(instruction2);
    devoBox.appendChild(questions);

    // Disable next button
    document.getElementById("next-button").classList.add("disabled");
  });
});

// Handlers for button
function nextDevo() {
  if (document.getElementById("next-button").classList.contains("disabled")) {
    return;
  }

  // Scroll to top of page
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function prevDevo() {
  if (document.getElementById("prev-button").classList.contains("disabled")) {
    return;
  }

  // Scroll to top of page
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
