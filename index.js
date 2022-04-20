// Select canvas
const lineChart = document.querySelector('#lineChart').getContext("2d")
const barChart = document.querySelector('#barChart').getContext("2d")
const doughnutChart = document.querySelector('#doughnutChart').getContext("2d")
const pieChart = document.querySelector('#pieChart').getContext("2d")

// Gradient
const gradient = lineChart.createLinearGradient(0, 0, 0, 600)
gradient.addColorStop(0, "#DD2476")
gradient.addColorStop(1, "#FF512F")



// Line Chart
const pythonData = {
  labels: ["2008", "2010", "2012", "2014", "2016", "2018", "2020", "2022"],
  data: [554, 467, 341, 237, 451, 447, 448, 987, 1533]
}


const data = {
  labels: pythonData.labels,
  datasets: [{
    label: "TIOBE index of Python",
    data: pythonData.data,
    fill: true,
    backgroundColor: gradient,
    borderWidth: 4,
    borderColor: "#fff",
    pointBackgroundColor: "#fff",
    tension: .18,
  }]
}

const config = {
  type: "line",
  data: data,
  options: {
    raduis: 10,
    hitRadius: 10,
    hoverRadius: 10,
    responsive: true,
    color: "#fff",

    scales: {
      y: {
        ticks: {
          color: "white",
          font: {
            size: "12px",
          },
          callback: (value) => `${value/100}%`,
        },

        grid: {
          display: false
        }
      },
      x: {
        ticks: {
          color: "#fff",
          font: {
            size: "10px"
          }
        },
        grid: {
          display: false
        }
      },


    },
    plugins: {
      //  title:{
      //    display:true,
      //    text:"Ultrasdzcoder",
      //    font:{
      //     size:"50px"
      //    }
      //  }

    }

  }
}


const line = new Chart(lineChart, config)
Chart.defaults.font.size = 15





// Bar chart

const barData = {
  "javascript": '64.96',
  "html-css": '56.06',
  "python": '48.24',
  "sql": '48.04',
  "java": '35.35',
}


const bar = new Chart(barChart, {
  type: "bar",
  data: {
    labels: Object.keys(barData),
    datasets: [{
      label: "Most Used Language 2021",
      data: Object.values(barData),
      backgroundColor: gradient,
      borderWidth: 3,
      borderColor: "white"
    }]
  },
  options: {
    color: "#fff",
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "#fff"
        },
        grid: {
          display: false
        }
      },
      y: {

        ticks: {
          color: "#fff"
        },

        grid: {
          display: false
        }
      }
    }
  },
  plugins: {}
})

// Doughnut chart
const doughnutData = {
  ...barData
}



const doughnut = new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: Object.keys(doughnutData),
    datasets: [{
      data: Object.values(doughnutData),
      backgroundColor: [
        "#1abc9c",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
      ],

    }]
  },
  options: {
    color: "#fff"
  },
  plugins: {}
})

// Pie Chart

const pieData = {
  ...doughnutData
}


const pie = new Chart(pieChart, {
  type: "pie",
  data: {
    labels: Object.keys(pieData),
    datasets: [{
      data: Object.values(pieData),
      backgroundColor: [
        "#1abc9c",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e",
      ]
    }]
  },
  options: {
    color: "white"
  },
  plugins: {}


})