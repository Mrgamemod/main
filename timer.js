var sec = 59; // set the seconds
  var min = 5; // set the minutes
  var SD;

  function countDown() {
    sec--;
    if (sec == -1) {
      sec = 59;
      min = min - 1;
    }
    else {
      min = min;
    }

    if (sec <= 9) {
      sec = "0" + sec;
    }
    var c = min > 1 ? languageSelector.minutes : languageSelector.oneMinute,
      l = sec > 1 ? languageSelector.seconds : languageSelector.oneSecond;

    time = (min <= 9 ? "" + min : min) + ' ' + c + ' ' + sec + ' ' + l;

    if (document.getElementById) {
      document.getElementById('theTime').innerHTML = time;
    }

    SD = window.setTimeout("countDown();", 1000);
    if (min == '00' && sec == '00') {
      sec = "00";
      window.clearTimeout(SD);
    }
  }

  window.onload = countDown;
