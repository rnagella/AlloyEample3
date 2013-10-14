var arg = arguments[0] || 'No data received'; // if there is no data passed.
if (arg !== 'No data received') {

  $.myUseData.text = 'User Entered data : ' + arg;
  $.myUseData.setVisible(true);
}

// Event Handlers

function closeWin () {

  $.newWin.close();
}

$.newWin.open();