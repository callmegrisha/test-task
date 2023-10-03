document.addEventListener('DOMContentLoaded', () => {
  const myTreeView = document.querySelector(".tree-view");

  initializeTreeView(myTreeView);
  toggleTreeViews(myTreeView);
});

function hasClass(element, className) {
  return element.classList.contains(className);
}

function initializeTreeView(element) {
  const folders = element.querySelectorAll('.folder');
  folders.forEach(folder => {
    const caretBtn = folder.querySelector('.caret__btn');
    if (folder.classList.contains('folder--opened')) {
      caretBtn.textContent = '-';
    } else {
      caretBtn.textContent = '+';
    }
  });
}

function toggleTreeViews(element) {
  element.addEventListener("click", (e) => {
      let target = e.target;
      
      if (hasClass(target, "caret__btn")) {
        const folder = target.closest(".folder");
        target.parentNode.classList.toggle("caret--opened");
        folder && folder.classList.toggle("folder--opened");

        target.textContent = target.textContent === "+" ? "-" : "+";
      }
  });
}



// toggleTreeViews(myTreeView);

