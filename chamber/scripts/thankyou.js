const form = document.querySelector('form');

    form.addEventListener('submit', function(e) {
        // Collect required fields
        const formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        orgName: document.getElementById('org-name').value,
        timestamp: document.getElementById('timestamp').value
        };

        // Save to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
    });

 // Get form data from localStorage
        const formData = JSON.parse(localStorage.getItem('formData'));

        if (formData) {
            document.getElementById('display-fname').textContent = formData.fname;
            document.getElementById('display-lname').textContent = formData.lname;
            document.getElementById('display-email').textContent = formData.email;
            document.getElementById('display-phone').textContent = formData.phone;
            document.getElementById('display-orgName').textContent = formData.orgName;
            document.getElementById('display-timestamp').textContent = formData.timestamp;
        }