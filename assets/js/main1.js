// Reset form
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message_ID").value = "";
}

// Send message button section
function sendInfo() {
  var v_Your_Name = document.getElementById("name").value;
  var v_Your_Email = document.getElementById("email").value;
  var v_Subject = document.getElementById("subject").value;
  var v_Message = document.getElementById("message_ID").value;

  if (
    v_Your_Name == "" ||
    v_Your_Email == "" ||
    v_Subject == "" ||
    v_Message == ""
  ) {
    alert("Please fill in the missing fields");
  } else {
    var info = {
      Your_Name: v_Your_Name,
      Your_Email: v_Your_Email,
      Subject: v_Subject,
      Message: v_Message,
    };

    var json = JSON.stringify(info);
    localStorage.setItem("info", json);
    alert("Your message has been sent successfully");
    resetForm();
  }
}
