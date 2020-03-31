var url = "https://princetonlivingwater.org/devos/3-23-2020.txt";

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

    let title = document.createElement("h3");
    let titleNode = document.createTextNode(devo["title"]);
    title.appendChild(titleNode);

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
    devoBox.appendChild(title);
    devoBox.appendChild(passage);
    devoBox.appendChild(instruction1);
    devoBox.appendChild(content);
    devoBox.appendChild(instruction2);
    devoBox.appendChild(questions);
  });
});

// Add handlers for buttons
