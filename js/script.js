// Defaults
Chart.defaults.global.defaultFontColor = '#fff'
Chart.defaults.global.elements.line.borderWidth = 1
Chart.defaults.global.elements.rectangle.borderWidth = 1
Chart.defaults.scale.gridLines.color = '#444'
Chart.defaults.scale.ticks.display = false



fetch('https://coasters-api.herokuapp.com/')
    .then(response => response.json())
    .then(data => printCharts(data))


function printCharts(coasters) {

    document.body.classList.add('running')

    compareRadialChart(coasters, 'chart2')
    yearsBarChart(coasters, 'chart6')

}


function compareRadialChart(coasters, id) {

    const data = {
        labels: ['Estados Unidos', 'Argentina', 'Brasil', 'Iran', 'China'],
        datasets: [
            {
                data: [
                    coasters.filter(eachCoaster => eachCoaster.country === 'United States').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'United Kingdom').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'Spain').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'Japan').length,
                    coasters.filter(eachCoaster => eachCoaster.country === 'China').length
                ],
                borderWidth: 1,
                borderColor: styles.color.solids.map(eachColor => eachColor),
                backgroundColor: styles.color.alphas.map(eachColor => eachColor)
            }
        ]
    }

    const options = {
        legend: {
            position: 'right'
        }
    }

    new Chart(id, { type: 'polarArea', data, options })
}








function modelDoughnutChart(coasters, id) {

    const data = {
        labels: ['Propulsada', 'Hiper montaña', 'Giga montaña', 'Inversión', 'Sentado'],
        datasets: [
            {
                data: [
                    coasters.filter(eachCoaster => eachCoaster.model === 'Accelerator Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Hyper Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Giga Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Multi Inversion Coaster').length,
                    coasters.filter(eachCoaster => eachCoaster.model === 'Sitting Coaster').length
                ],
                borderColor: styles.color.solids.map(eachColor => eachColor),
                backgroundColor: styles.color.alphas.map(eachColor => eachColor),
                borderWidth: 1
            }
        ]
    }

    const options = {
        legend: {
            position: 'right'
        }
    }

    new Chart(id, { type: 'doughnut', data, options })
}







function heightRadarChart(coasters, id) {

    const selectedCoasters = coasters.filter(eachCoaster => eachCoaster.height > 80)

    const data = {
        labels: selectedCoasters.map(eachCoaster => eachCoaster.name),
        datasets: [
            {
                label: 'Altura',
                data: selectedCoasters.map(eachCoaster => eachCoaster.height),
                borderColor: styles.color.solids[0],
                borderWidth: 1
            }
        ]
    }

    const options = {
        legend: {
            display: false
        }
    }

    new Chart(id, { type: 'radar', data, options })
}









function yearsBarChart(coasters, id) {


    const data = {
        labels: [ '2000', '2005', '2010', '2015', '2020', '2025'],
        datasets: [
            {
                label: 'Crecimiento',
                borderColor: styles.color.solids[2],
                data: [
                    coasters.filter(eachCoaster => eachCoaster.year >= 1995 && eachCoaster.year <= 1997).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 1998 && eachCoaster.year <= 2000).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2001 && eachCoaster.year <= 2003).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2004 && eachCoaster.year <= 2006).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2007 && eachCoaster.year <= 2009).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2010 && eachCoaster.year <= 2012).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2013 && eachCoaster.year <= 2015).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2016 && eachCoaster.year <= 2018).length,
                    coasters.filter(eachCoaster => eachCoaster.year >= 2019 && eachCoaster.year <= 2021).length
                ]
            },
           
        ]
    }

    const options = {
        maintainAspectRatio: false,
        scaleFontColor: '#fff',
        scales: {
            yAxes: [{
                ticks: {
                    display: true
                }
            }],
            xAxes: [{
                barPercentage: 0.4,
                ticks: {
                    display: true
                }
            }]
        }
    }

    new Chart(id, { type: 'line', data, options })

}
