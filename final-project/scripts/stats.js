// fetch element where the chart will go in HTML 
const chart = document.getElementById('passingRate').getContext('2d'); // we want a 2D drawing
const subjects = document.getElementById('popularSubjects').getContext('2d');

// creating the doughnut charts

// PASSING RATE
const passingRateChart = new Chart(chart, {
    type: 'doughnut',
    data: {
        labels: ['Passed', 'Did Not Pass'], // 2 parts of data
        datasets: [{
            label: 'Overall Passing Rate',
            data: [92, 8],
            backgroundColor: [
                '#0d0d5e',
                '#4646cfff'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom', // legend at the bottom
            },
            tooltip: {
                enabled: true, // show numbers on hover
            }
        }
    }
});

// POPULAR SUBJECTS
const totalStudents = 350;
const subjectsChart = new Chart(subjects, {
    type: 'doughnut',
    data: {
        labels: ['Maths', 'Physics', 'Life Sciences'],
        datasets: [{
            label: 'Top 3 Subjects',
            data: [315, 298, 273],
            backgroundColor: [
                '#554903ff',
                '#a5932cff',
                '#e9d567ff'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw} students`;
                    }
                }
            }
        }
    }
}); 