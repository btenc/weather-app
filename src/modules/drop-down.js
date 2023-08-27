function dropDownInit(
  dropDownButtonID,
  dropDownContentContainerID,
  hiddenClassName
) {
  const container = document.getElementById(dropDownContentContainerID);
  const button = document.getElementById(dropDownButtonID);

  function toggleHidden() {
    if (container.classList.contains(hiddenClassName)) {
      container.classList.remove(hiddenClassName);
    } else {
      container.classList.add(hiddenClassName);
    }
  }

  window.addEventListener("click", (event) => {
    if (!event.target.matches(`#dropdown-button`)) {
      if (!container.classList.contains(hiddenClassName)) {
        container.classList.add(hiddenClassName);
      }
      if (event.target.matches("#query")) {
        container.classList.remove(hiddenClassName);
      }
      if (event.target.matches("#submit-button")) {
        container.classList.remove(hiddenClassName);
      }
    }
  });

  button.addEventListener("click", () => {
    toggleHidden();
  });
}

export default dropDownInit;
