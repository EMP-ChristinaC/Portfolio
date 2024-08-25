
// Submit Button

function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(closePopup, 2000);
  }

  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }

// Clear Button

  function clearForm() {
    document.getElementById("form-clear").reset();
  }