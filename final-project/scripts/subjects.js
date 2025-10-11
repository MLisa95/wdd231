const gradeInput = document.getElementById("grade");
const container = document.getElementById("subject-cards");
const hint = document.getElementById("subject-hint");

gradeInput.addEventListener("change", loadSubjects);

async function loadSubjects() {
  const gradeValue = parseInt(gradeInput.value);
  container.innerHTML = ""; // clear previous cards
  hint.textContent = "";

  if (isNaN(gradeValue) || gradeValue < 1 || gradeValue > 12) {
    hint.textContent = "Please enter a valid grade between 1 and 12.";
    return;
  }

  try {
    const response = await fetch("subjects.json");
    const data = await response.json();

    let subjectGroup = [];

    if (gradeValue < 10) {
      subjectGroup = data.below10;
      hint.textContent = "Select your subjects for Grades 1–9.";
    } else {
      subjectGroup = data.grade10to12;
      hint.textContent = "Select your subjects for Grades 10–12.";
    }

    subjectGroup.forEach(subject => {
      const card = document.createElement("div");
      card.classList.add("subject-card");

      card.innerHTML = `
        <label>
          <input type="checkbox" name="subjects" value="${subject}">
          <span>${subject}</span>
        </label>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading subjects:", error);
    hint.textContent = "Could not load subjects. Please try again.";
  }
}
