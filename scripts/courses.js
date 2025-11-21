const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const courseContainer = document.querySelector('#courseContainer');
const totalCredits = document.querySelector('#totalCredits');

// creating function that will filter array
function displayCourses(courseList) {
    courseContainer.innerHTML = ''; //clear previous content

    // creating a div for each course
    courseList.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        // if course is completed to highlight
        if (course.completed) {
            courseCard.classList.add('completed');
        }

        courseCard.innerHTML = `
        <h3>${course.subject} ${course.number}</h3>
        `;

        courseContainer.appendChild(courseCard);
    });
}

function courseCredits(courseList) {
    totalCredits.innerHTML = ''; // clear previous content

    let sum = 0; // variable to store total = 'let' can CHANGE, 'const' CANNOT

    courseList.forEach(course => {
        if (course.completed) { // remember that booleans don't need quotes
            sum += course.credits;
        }
    });

        // update to HTML outside off loop
        totalCredits.textContent = `Total Credits: ${sum}`;
}

// SCRIPT FOR DISPLAYING COURSE DETAILS

const modal = document.querySelector('#modal');

function displayCourseInformation(course) {
    modal.innerHTML = '';

    modal.innerHTML = `
    <button id="closeModal>❌</button>
    <h2>${course.name} - ${course.number}</h2>
    <p>${course.description}</p>
    <p>${course.credits}</p>
    `;

    modal.showModal();

    closeModal().addEventListener("click", () => {
        modal.closest();
    });

    courseContainer.addEventListener("click", () => {
        displayCourseInformation(course);
    });

}

displayCourses(courses);
courseCredits(courses);
displayCourseInformation(course);