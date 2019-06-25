// var clickButton = document.querySelector("#clickButton");
var inputData = document.querySelector('input').value;
var liTag = document.querySelector('li');
var di1 = document.getElementById('div1');
// var idDisplay = document.getElementById("#idDisplay")
var store = [];

clickButton.addEventListener('click', function() {
  addData();
});
function addData() {
  // storing inpudata in an array and displaying in console
  store.push((inputData = document.querySelector('input').value));
  console.log(store);

  var txtNode = document.createTextNode(inputData);

  // creation of li tag
  var liTag = document.createElement('LI');

  //putting tags in side of each other
  liTag.appendChild(txtNode);
  di1.appendChild(liTag);

  // making input field empty after submitting
  var inputData = (document.querySelector('input').value = '');

  liTag.classList.add('name');
}

function removeData(event) {
  /**
   * Get the selected item (li) {selectedElement}
   * */
  var selectedElement = event.target;

  /*** Retrieve the inner text from the selected item {selectedElement.innerHTML} */
  var elementValue = selectedElement.innerHTML;

  /*
   * since we are displaying the information of the array on the screen, we want to
   * remove the element from the array when we delete it from the screen
   *
   */
  var elementIndex = store.indexOf(elementValue);
  store.splice(elementIndex, 1);

  /*
   * finally, remove the element from the screen
   * remove the element from the array when we delete it from the screen
   *
   */
  selectedElement.remove();
}

di1.addEventListener('click', function(event) {
  removeData(event);
  console.log(store)
});
