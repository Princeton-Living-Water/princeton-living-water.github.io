const MAX_DAY = 105;
var current = 105;

// Parse devo text and place into an object
function parseText(text) {
  let devo = {};
  let lines = text.split(/\r?\n/).filter((x) => x !== "");
  let start = lines.findIndex((x) => x.startsWith("***"));
  let end = lines.lastIndexOf("Consider");

  devo["title"] = lines[0];
  devo["date"] = lines[1];

  if (start < 0) {
    devo["passage"] = "";
    devo["content"] = lines.slice(2);
    devo["questions"] = "";
  } else {
    devo["passage"] = lines.slice(2, start);
    devo["content"] = lines.slice(start + 1, end);
    devo["questions"] = lines.slice(end + 1);
  }

  return devo;
}

// Create a DOM element of paragraphs, given an array of lines
function linesToElem(lines) {
  let elem = document.createElement("div");
  for (l of lines) {
    if (l == "###") {
      let node = document.createElement("hr");
      elem.appendChild(node);
    } else {
      let node = document.createElement("p");
      node.appendChild(document.createTextNode(l));
      elem.appendChild(node);
    }
  }

  return elem;
}

// Fill in current devo
function renderDevo(day) {
  let url = `https://www.princetonlivingwater.org/resources/devos/day${day}.txt`;
  fetch(url).then(function (res) {
    res.text().then(function (text) {
      let devo = parseText(text);

      let header = document.createElement("h3");
      let headerHTML = devo["date"] + "<br/>" + devo["title"];
      header.innerHTML = headerHTML;
      header.classList.add("devo-header");

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
      if (devo["passage"] != "") {
        devoBox.appendChild(passage);
        devoBox.appendChild(instruction1);
      }
      devoBox.appendChild(content);
      if (devo["questions"] != "") {
        devoBox.appendChild(instruction2);
        devoBox.appendChild(questions);
      }
    });
  });
}

renderDevo(current);
// Disable next button
document.getElementById("next-button").classList.add("disabled");

// Handlers for button
function removeDevo() {
  let devoBox = document.getElementById("devo-box");
  devoBox.innerHTML = "";
}

function nextDevo() {
  if (document.getElementById("next-button").classList.contains("disabled")) {
    return;
  }

  // Replace devo with next
  removeDevo();
  current += 1;
  renderDevo(current);

  // Activate/deactivate buttons
  prevButton = document.getElementById("prev-button");
  if (prevButton.classList.contains("disabled")) {
    prevButton.classList.remove("disabled");
  }
  if (current == MAX_DAY) {
    document.getElementById("next-button").classList.add("disabled");
  }

  // Scroll to top of page
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function prevDevo() {
  if (document.getElementById("prev-button").classList.contains("disabled")) {
    return;
  }

  // Replace devo with previous
  removeDevo();
  current -= 1;
  renderDevo(current);

  // Activate/deactivate buttons
  nextButton = document.getElementById("next-button");
  if (nextButton.classList.contains("disabled")) {
    nextButton.classList.remove("disabled");
  }
  if (current == 1) {
    document.getElementById("prev-button").classList.add("disabled");
  }

  // Scroll to top of page
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
