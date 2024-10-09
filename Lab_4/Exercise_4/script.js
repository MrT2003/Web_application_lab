const textarea = document.getElementById("character");
const charCount = document.getElementById("charCount");
const maxChars = 250;

textarea.addEventListener("input", function () {
  const currentLength = textarea.value.length;
  charCount.textContent = currentLength;

  if (currentLength >= maxChars) {
    textarea.classList.add("limit-reached"); // Add the class here
    charCount.classList.add("count_number");
  } else {
    textarea.classList.remove("limit-reached");
    charCount.classList.remove("count_number");
  }
});