function hideCamps() {
    document.getElementById("baseCamp").style.display = "none";
    document.getElementById("highCamp").style.display = "none";
  }
  
  function showBaseCamp() {
    hideCamps();
    // 2 dòng là 1
    var baseCamp = document.getElementById("baseCamp");
    baseCamp.style.display = "block"; // Make visible
    // You can add additional code to position the baseCamp here using CSS styles
  }
  
  function showHighCamp() {
    hideCamps();
    var highCamp = document.getElementById("highCamp");
    highCamp.style.display = "block"; // Make visible
    // You can add additional code to position the highCamp here using CSS styles
  }