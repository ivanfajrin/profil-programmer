<script>
    const ctx = document.getElementById('skillChart').getContext('2d');

    const data = {
        labels: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP'],
        datasets: [{
            label: 'Skill Level',
            data: [10, 8, 8, 8, 7], // Nilai skill
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'radar', // Radar chart for skill mapping
        data: data,
        options: {
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    };

    const skillChart = new Chart(ctx, config);
</script>

