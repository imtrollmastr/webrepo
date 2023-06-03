function showText() {
    var hiddenDots = document.getElementById("hidden-dots");
    var hiddenText = document.getElementById("hidden-text");
    hiddenDots.classList.add("hidden");
    hiddenText.classList.remove("hidden");
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Text copied to clipboard');
      })
      .catch((error) => {
        alert('Error copying text to clipboard:', error);
      });
  }