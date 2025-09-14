document.getElementById("saveBtn").addEventListener("click", function () {
  const inputBox = document.getElementById("inputBox");
  const sectionSelect = document.getElementById("sectionSelect");
  const value = inputBox.value.trim();
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;
    if (sectionSelect.value === "physical") {
      document.getElementById("physicalList").appendChild(li);
    } else {
      document.getElementById("mentalList").appendChild(li);
    }
    inputBox.value = "";
    inputBox.focus();
  }
});
