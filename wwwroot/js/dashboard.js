(function($) {
  'use strict';
  $(function() {
    
    if ($('#cash-sales-chart').length) {
      var cashSalesCanvas = $("#cash-sales-chart").get(0).getContext("2d");
      var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            label: 'Support',
            data: [25, 90, 50, 80, 40, 40, 0],
            borderColor: [
              '#2090ff'
            ],
            borderWidth: 2,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              min : 0,
              max : 100,
              stepSize: 10,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
        stepsize: 1
      };
      var cashSales = new Chart(cashSalesCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#cash-sales-chart-b').length) {
      var cashSalesBCanvas = $("#cash-sales-chart-b").get(0).getContext("2d");
      var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            label: 'Support',
            data: [85, 20, 60, 30, 70, 70, 90],
            borderColor: [
              '#2090ff'
            ],
            borderWidth: 2,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              min : 0,
              max : 100,
              stepSize: 10,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
        stepsize: 1
      };
      var cashSalesB = new Chart(cashSalesBCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#monthly-income-chart').length) {
      var monthlyIncomeCanvas = $("#monthly-income-chart").get(0).getContext("2d");
      var data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21'],
        datasets: [
          {
            label: 'Support',
            data: [85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 62, 60, 30, 60, 68, 75, 70, 90],
            borderColor: [
              '#ffc100'
            ],
            borderWidth: 2,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              min : 0,
              max : 100,
              stepSize: 10,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0
          }
        },
        stepsize: 1
      };
      var monthlyIncome = new Chart(monthlyIncomeCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#monthly-income-chart-b').length) {
      var monthlyIncomeBCanvas = $("#monthly-income-chart-b").get(0).getContext("2d");
      var data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21'],
        datasets: [
          {
            label: 'Support',
            data: [90, 70, 75, 68, 60, 30, 60, 62, 60, 40, 65, 68, 68, 63, 65, 60, 85, 70, 90, 83, 85],
            borderColor: [
              '#ffc100'
            ],
            borderWidth: 2,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 10,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line : {
            tension: 0
          }
        },
        stepsize: 1
      };
      var monthlyIncomeB = new Chart(monthlyIncomeBCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#yearly-sales-chart').length) {
      var yearlySalesCanvas = $("#yearly-sales-chart").get(0).getContext("2d");
      var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            label: 'Support',
            data: [0, 40, 40, 80, 40, 85, 35],
            borderColor: [
              '#ff4747'
            ],
            borderWidth: 2,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 10,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
        stepsize: 1
      };
      var yearlySales = new Chart(yearlySalesCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#yearly-sales-chart-b').length) {
      var yearlySalesBCanvas = $("#yearly-sales-chart-b").get(0).getContext("2d");
      var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            label: 'Support',
            data: [35, 85, 40, 80, 40, 40, 0],
            borderColor: [
              '#ff4747'
            ],
            borderWidth: 2,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 10,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          }
        },
        stepsize: 1
      };
      var yearlySalesB = new Chart(yearlySalesBCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#daily-deposits-chart').length) {
      var dailyDepositsCanvas = $("#daily-deposits-chart").get(0).getContext("2d");
      var data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21'],
        datasets: [
          {
            label: 'Support',
            data: [85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 62, 60, 30, 60, 68, 75, 70, 90],
            borderColor: [
              '#71c016'
            ],
            borderWidth: 2,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              min : 0,
              max : 100,
              stepSize: 10,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0
          }
        },
        stepsize: 1
      };
      var dailyDeposits = new Chart(dailyDepositsCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#daily-deposits-chart-b').length) {
      var dailyDepositsBCanvas = $("#daily-deposits-chart-b").get(0).getContext("2d");
      var data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12','13','14','15','16','17','18','19','20','21'],
        datasets: [
          {
            label: 'Support',
            data: [90, 70, 75, 68, 60, 30, 60, 62, 60, 40, 65, 68, 68, 63, 65, 60, 85, 70, 90, 83, 85],
            borderColor: [
              '#71c016'
            ],
            borderWidth: 2,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 10,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 0,
              color: "rgba(0,0,0,0)"
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line : {
            tension : 0
          }
        },
        stepsize: 1
      };
      var dailyDepositsB = new Chart(dailyDepositsBCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }



    if ($('#cash-deposits-chart').length) {
      var cashDepositsCanvas = $("#cash-deposits-chart").get(0).getContext("2d");
      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [
          {
            label: 'Returns',
            data: [27, 35, 30, 40, 52, 48, 54, 46, 70],
            borderColor: [
              '#ff4747'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#fff"
          },
          {
            label: 'Sales',
            data: [29, 40, 37, 48, 64, 58, 70, 57, 80],
            borderColor: [
              '#4d83ff'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#fff"
          },
          {
            label: 'Loss',
            data: [90, 62, 80, 63, 72, 62, 40, 50, 38],
            borderColor: [
              '#ffc100'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#fff"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 20,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) {
          var text = [];
          text.push('<ul class="dashboard-chart-legend">');
          for(var i=0; i < chart.data.datasets.length; i++) {
            text.push('<li><span style="background-color: ' + chart.data.datasets[i].borderColor[0] + ' "></span>');
            if (chart.data.datasets[i].label) {
              text.push(chart.data.datasets[i].label);
            }
          }
          text.push('</ul>');
          return text.join("");
        },
        elements: {
          point: {
            radius: 3
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : -10,
            left : -10,
            right: 0
          }
        }
      };
      var cashDeposits = new Chart(cashDepositsCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('cash-deposits-chart-legend').innerHTML = cashDeposits.generateLegend();
    }

    if ($('#cash-deposits-chart-dark').length) {
      var cashDepositsCanvas = $("#cash-deposits-chart-dark").get(0).getContext("2d");
      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [
          {
            label: 'Returns',
            data: [27, 35, 30, 40, 52, 48, 54, 46, 70],
            borderColor: [
              '#ff4747'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#26293b"
          },
          {
            label: 'Sales',
            data: [29, 40, 37, 48, 64, 58, 70, 57, 80],
            borderColor: [
              '#4d83ff'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#26293b"
          },
          {
            label: 'Loss',
            data: [90, 62, 80, 63, 72, 62, 40, 50, 38],
            borderColor: [
              '#ffc100'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#26293b"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#313452",
              zeroLineColor: "#313452",
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 20,
              fontColor: "#b1b1b5",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#313452",
            },
            ticks : {
              fontColor: "#b1b1b5",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) {
          var text = [];
          text.push('<ul class="dashboard-chart-legend">');
          for(var i=0; i < chart.data.datasets.length; i++) {
            text.push('<li><span style="background-color: ' + chart.data.datasets[i].borderColor[0] + ' "></span>');
            if (chart.data.datasets[i].label) {
              text.push(chart.data.datasets[i].label);
            }
          }
          text.push('</ul>');
          return text.join("");
        },
        elements: {
          point: {
            radius: 3
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : -10,
            left : -10,
            right: 0
          }
        }
      };
      var cashDeposits = new Chart(cashDepositsCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('cash-deposits-chart-dark-legend').innerHTML = cashDeposits.generateLegend();
    }

    if ($('#total-sales-chart').length) {
      var totalSalesChartCanvas = $("#total-sales-chart").get(0).getContext("2d");

      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
        datasets: [
          {
            label: '2019',
            data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(47,91,191,0.77)"
          },
          {
            label: '2018',
            data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(77,131,255,0.77)"
          },
          {
            label: 'Past years',
            data: [98, 88, 92, 90, 98, 98, 90, 92, 78, 88, 84, 76, 80, 72, 74, 74, 88, 80, 72, 62, 62, 72, 72, 78, 78, 72, 75, 78, 68, 68, 60, 68, 70, 75, 70, 80, 82, 78, 78, 84, 82 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(77,131,255,0.43)"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              display : true,
              min: 0,
              max: 100,
              stepSize: 10,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              display: true,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) {
          var text = [];
          text.push('<ul class="dashboard-chart-legend mb-0 mt-4">');
          for(var i=0; i < chart.data.datasets.length; i++) {
            text.push('<li><span style="background-color: ' + chart.data.datasets[i].backgroundColor + ' "></span>');
            if (chart.data.datasets[i].label) {
              text.push(chart.data.datasets[i].label);
            }
          }
          text.push('</ul>');
          return text.join("");
        },
        elements: {
          point: {
            radius: 0
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : 0,
            left : 0,
            right: 0
          }
        }
      };
      var totalSalesChart = new Chart(totalSalesChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('total-sales-chart-legend').innerHTML = totalSalesChart.generateLegend();
    }

    $('#recent-purchases-listing').DataTable({
      "aLengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
      ],
      "iDisplayLength": 10,
      "language": {
        search: ""
      },
      searching: false, paging: false, info: false
    });

    if ($('#downloads-chart-a').length) {
      var downloadsChartAChartCanvas = $("#downloads-chart-a").get(0).getContext("2d");

      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
        datasets: [
          {
            label: '2019',
            data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.77)"
          },
          {
            label: '2018',
            data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 58, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.43)"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              display : true,
              min: 0,
              max: 80,
              stepSize: 10,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              display: true,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : 0,
            left : 0,
            right: 0
          }
        }
      };
      var downloadsChartAChart = new Chart(downloadsChartAChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#downloads-chart-b').length) {
      var downloadsChartBChartCanvas = $("#downloads-chart-b").get(0).getContext("2d");

      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
        datasets: [
          {
            label: '2019',
            data: [52, 52, 40, 40, 28, 32, 26, 31, 32, 32, 32, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.77)"
          },
          {
            label: '2018',
            data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 64, 60, 55, 49, 44, 42, 43, 42, 38, 43, 41, 43, 40, 38 ,38, 38, 32, 32 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.43)"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              display : true,
              min: 0,
              max: 80,
              stepSize: 10,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              display: true,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : 0,
            left : 0,
            right: 0
          }
        }
      };
      var downloadsChartBChart = new Chart(downloadsChartBChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#feedbacks-chart-a').length) {
      var feedbacksChartAChartCanvas = $("#feedbacks-chart-a").get(0).getContext("2d");

      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
        datasets: [
          {
            label: '2019',
            data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.77)"
          },
          {
            label: '2018',
            data: [68, 58, 62, 66, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 46, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.43)"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              display : true,
              min: 0,
              max: 80,
              stepSize: 10,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              display: true,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : 0,
            left : 0,
            right: 0
          }
        }
      };
      var feedbacksChartAChart = new Chart(feedbacksChartAChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#feedbacks-chart-b').length) {
      var feedbacksChartBChartCanvas = $("#feedbacks-chart-b").get(0).getContext("2d");

      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
        datasets: [
          {
            label: '2019',
            data: [22, 22, 10, 10, 8, 12, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 20, 15, 19, 24 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.77)"
          },
          {
            label: '2018',
            data: [68, 58, 62, 66, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 46, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.43)"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              display : true,
              min: 0,
              max: 80,
              stepSize: 10,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              display: true,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : 0,
            left : 0,
            right: 0
          }
        }
      };
      var feedbacksChartBChart = new Chart(feedbacksChartBChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#customers-chart-a').length) {
      var customersChartAChartCanvas = $("#customers-chart-a").get(0).getContext("2d");

      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
        datasets: [
          {
            label: '2019',
            data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.77)"
          },
          {
            label: '2018',
            data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.43)"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              display : true,
              min: 0,
              max: 80,
              stepSize: 10,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              display: true,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : 0,
            left : 0,
            right: 0
          }
        }
      };
      var customersChartAChart = new Chart(customersChartAChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

    if ($('#customers-chart-b').length) {
      var customersChartBChartCanvas = $("#customers-chart-b").get(0).getContext("2d");

      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
        datasets: [
          {
            label: '2019',
            data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.77)"
          },
          {
            label: '2018',
            data: [55, 48, 52, 62, 64, 66, 62, 60, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 33, 30, 28 ,28, 32, 36, 42 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(255,255,255,0.43)"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              display : true,
              min: 0,
              max: 80,
              stepSize: 10,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              display: true,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 0
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : 0,
            left : 0,
            right: 0
          }
        }
      };
      var customersChartBChart = new Chart(customersChartBChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }

  });
})(jQuery);