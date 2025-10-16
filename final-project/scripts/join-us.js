const subjects = ["Mathematics", "Natural Science", "Social Science", "EMS", 
  "English", "English FAL", "Afrikaans", "Xhosa", "Technology", "Math Literacy", 
  "Life Sciences", "Physical Sciences", "Accounting", "Economics", "Business Studies", 
  "Geography", "History"];

const subjectSelect = document.getElementById("subjectSelect");
const selectedContainer = document.getElementById("selectedSubjects");
let selectedSubjects = [];

// populate dropdown
subjects.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
});

// handle selection
subjectSelect.addEventListener("change", () => {
    const subject = subjectSelect.value;
    if (subject && !selectedSubjects.includes(subject)) {
        selectedSubjects.push(subject);
        updateSelectedSubjects();
  }
  subjectSelect.value = ""; // reset dropdown
});

// update tags display
function updateSelectedSubjects() {
    selectedContainer.innerHTML = "";

    document.querySelectorAll('input[name="subjects"]').forEach(i => i.remove());

    // subject tags
    selectedSubjects.forEach(subject => {
        const tag = document.createElement("span");
        tag.className = "subject-tag";
        tag.textContent = subject;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.addEventListener("click", () => {
            selectedSubjects = selectedSubjects.filter(s => s !== subject);
            updateSelectedSubjects();
        });

        tag.appendChild(removeBtn);
        selectedContainer.appendChild(tag);

        // adding hidden input for URLSearchParams
        const hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = "subjects";
        hiddenInput.value = subject;
        document.getElementById("joinForm").appendChild(hiddenInput);
    });
}
