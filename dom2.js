function runCode (){
    let inputText = document.getElementById("input").value;
    // receives value that user inputs in "Add" button
    const newLi = document.createElement("li");
    // creates new list item after "Add" button is pushed
    newLi.innerHTML = inputText;
    // list item receives input value
        newLi.addEventListener('dblclick', e => {
        // removes item if user double clicks
        newLi.remove();
    });
    if (document.getElementById("fruit").checked == true) {
        fruitListOutput.append(newLi);
        // appends new fruit to list of fruits
    } else if (document.getElementById("vegetable").checked == true) {
        vegetableListOutput.append(newLi);
        // appends new vegetables to list of vegetables
    }
  }