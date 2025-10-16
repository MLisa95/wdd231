// URLSearchParams parses URL parameters
// windows.location.search returns query string (whole thing)

const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);

const subjectsList = urlParams.getAll('subjects'); // get all subjects as array
const subjectsListHTML = subjectsList.map(sub => `<li>${sub}</li>`).join('');

document.querySelector('#reg-details').innerHTML = `
    <p>Thank you ${urlParams.get('firstName')} ${urlParams.get('lastName')} for your application.</p>
    <br>
    <p>You have applied for the following subject(s) for Grade ${urlParams.get('grade')}:</p>
    <ul>
        ${subjectsListHTML}
    </ul>
    <p>An email will be sent to ${urlParams.get('email')} for your timetable. See you soon.</p>
`;