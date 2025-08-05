const addBtn = document.getElementById("addTaskBtn");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  const span = document.createElement("span");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.classList.add("remove-btn");
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
});
