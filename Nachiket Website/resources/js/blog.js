function toggleCaret (caretNo){
  var list = document.getElementById("index-container").getElementsByClassName("collapsed-list");
  var caret = document.getElementsByClassName("caret")[caretNo];
  if (caret.innerHTML === "▼") {
    caret.innerHTML = "►";
    list[caretNo].style.display="none";
  } else {
    caret.innerHTML = "▼";
    list[caretNo].style.display="block";
  }
}
