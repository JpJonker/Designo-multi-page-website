const emptyWarning = document.getElementsByClassName("empty-warning");

function validate() {
  var name = document.forms["ContactUs"]["name"];
  var email = document.forms["ContactUs"]["email"];
  var phone = document.forms["ContactUs"]["phone"];
  var message = document.forms["ContactUs"]["message"];

  if (name.value == "") {
    emptyWarning[0].style.display = "flex";
    return false;
  } else if (name.value != "") {
    emptyWarning[0].style.display = "none";
  }

  if (email.value == "") {
    emptyWarning[1].style.display = "flex";
    return false;
  } else if (name.value != "") {
    emptyWarning[1].style.display = "none";
  }

  if (phone.value == "") {
    emptyWarning[2].style.display = "flex";
    return false;
  } else if (name.value != "") {
    emptyWarning[2].style.display = "none";
  }

  if (message.value == "") {
    emptyWarning[3].style.display = "flex";
    return false;
  } else if (name.value != "") {
    emptyWarning[3].style.display = "none";
  }

  return false;
}
