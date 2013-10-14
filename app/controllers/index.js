function doClick(e) {
  alert($.userInput.value);
  var userData = $.userInput.value;
  var newWin = Alloy.createController('newWin', userData).getView();
}

$.index.open();
