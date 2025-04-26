var button = document.getElementById("add");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function inputLengthCheck() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var del = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  del.appendChild(document.createTextNode("Delete"));
  del.classList.add("delete-btn");
  li.append(del);
  ul.appendChild(li);
  input.value = "";

  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  del.addEventListener("click", function () {
    li.parentNode.removeChild(li);
  });
}

function addListAfterClick() {
  if (inputLengthCheck() > 0) {
    createListElement();
  } else {
    alert("Empty Task!");
  }
}

function addListAfterKeydown(e) {
  if (inputLengthCheck() > 0 && e.key === "Enter") {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);
