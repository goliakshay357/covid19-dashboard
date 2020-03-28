import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service"

declare let Chart:any;

@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.scss']
})
export class Main1Component implements OnInit {

  data_API:any;
  confirmed: number;
  active: number;
  recovered: number;
  deaths: number;

  chart1_days = []
  chart1_y_values_totalconfirmed = []
  chart1_y_values_totalrecovered = []
  chart1_y_values_totaldecreased = []


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.get_data()


  }

  get_data(){
    this.dataService.get_data().subscribe(res => {
      console.log(res.json(), "the got data");
      this.data_API = res.json()
      this.confirmed = this.data_API.statewise[0].confirmed
      this.active = this.data_API.statewise[0].active
      this.recovered = this.data_API.statewise[0].recovered
      this.deaths = this.data_API.statewise[0].deaths
      console.log("Confirmed",this.confirmed);
      console.log("Active",this.active);
      console.log(this.recovered,this.deaths);

      // datacollection for chart 1
    for(let i=0;i<this.data_API.cases_time_series.length;i++){
      this.chart1_days.push(this.data_API.cases_time_series[i].date)
      this.chart1_y_values_totalconfirmed.push(Number(this.data_API.cases_time_series[i].totalconfirmed))
      this.chart1_y_values_totaldecreased.push(Number(this.data_API.cases_time_series[i].totaldeceased))
      this.chart1_y_values_totalrecovered.push(Number(this.data_API.cases_time_series[i].totalrecovered))
      // console.log(this.chart1_y_values_totalrecovered,"HAHAH");

    }
    console.log("Days",this.chart1_y_values_totalrecovered[50]);
    this.chartJS()

    var dailyconfirmed = []
    var dailydeceased =[]
    var dailyrecovered = []
    // var date =[]

    for(let i=0;i<this.data_API.cases_time_series.length;i++){
      // this.chart1_days.push(this.data_API.cases_time_series[i].date)
      dailyconfirmed.push(Number(this.data_API.cases_time_series[i].dailyconfirmed))
      dailydeceased.push(Number(this.data_API.cases_time_series[i].dailydeceased))
      dailyrecovered.push(Number(this.data_API.cases_time_series[i].dailyrecovered))
      // console.log(this.chart1_y_values_totalrecovered,"HAHAH");
    }


    this.chartJS1(dailyconfirmed,dailydeceased,dailyrecovered)

    }), err => {
      console.log("Error",err);

    }
  }

  chartJS(){
    console.log(screen.width);

    // var days = []
    // var y =[]
    // for(let i=0;i<59;i++){
    //   days.push(i)
    //   y.push(i)
    // }


    var ctx:any = document.getElementById('myChart')
    var width = document.getElementById('mainchart')
    ctx.width = width.clientWidth -200
    console.log(this.data_API,"APIIIIIIIIIII");

    console.log("We are in plotting",typeof this.chart1_days[1],this.chart1_y_values_totalconfirmed[1]);

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: this.chart1_days,
          datasets: [{
              label: 'Total Confirmed', // Name the series
              data: this.chart1_y_values_totalconfirmed, // Specify the data values array
              fill: false,
              borderColor: '#301728FF', // Add custom color border (Line)
              backgroundColor: '#301728FF', // Add custom color background (Points and Fill)
              borderWidth: 2 // Specify bar border width
          },
                    {
              label: 'Total Recovered', // Name the series
              data:this.chart1_y_values_totalrecovered, // Specify the data values array
              fill: false,
              borderColor: '#28a745', // Add custom color border (Line)
              backgroundColor: '#28a745', // Add custom color background (Points and Fill)
              borderWidth: 2 // Specify bar border width
          },
          {
            label: 'Total Decreased', // Name the series
            data: this.chart1_y_values_totaldecreased, // Specify the data values array
            fill: false,
            borderColor: '#6c757d', // Add custom color border (Line)
            backgroundColor: '#6c757d', // Add custom color background (Points and Fill)
            borderWidth: 2 // Specify bar border width
        },
        ]
      },
      options: {
        responsive: false, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
        legend: {
          display: false
      },
        scales: {
          xAxes: [{
             scaleLabel: {
                display: false,
                labelString: 'Volunteer Hours',
             },
             gridLines: {
                display: false,
                drawBorder: false //<- set this
             },
             ticks: {
              fontColor: "black",
              // fontSize: 18,
              stepSize: 1,
              beginAtZero: true,
              maxRotation: 80,
              minRotation: 80,
              autoSkip: true,
              maxTicksLimit: 100
          }
          }],
          yAxes: [{
             gridLines: {
                display: false,
                drawBorder: false //<- set this
             },
             ticks: {
              fontColor: "white",
              // fontSize: 18,
              // stepSize: 1,
              // beginAtZero: true
          }
          }]
       }
      }

  });



  }

















    chartJS1(confirmed,decreased,recovered){
    console.log(screen.width);
    console.log("HAHAHAHAHAHAHAH",confirmed,decreased,recovered);


    // var days = []
    // var y =[]
    // for(let i=0;i<59;i++){
    //   days.push(i)
    //   y.push(i)
    // }


    var ctx:any = document.getElementById('myChart2')
    var width = document.getElementById('mainchart')
    ctx.width = width.clientWidth -200
    console.log(this.data_API,"APIIIIIIIIIII");

    console.log("We are in plotting", this.chart1_days,this.chart1_y_values_totalconfirmed[1]);

    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: this.chart1_days,
          datasets: [{
              label: 'Total Confirmed', // Name the series
              data: confirmed, // Specify the data values array
              fill: false,
              borderColor: '#301728FF', // Add custom color border (Line)
              backgroundColor: '#301728FF', // Add custom color background (Points and Fill)
              borderWidth: 2 // Specify bar border width
          },
                    {
              label: 'Total Recovered', // Name the series
              data:recovered, // Specify the data values array
              fill: false,
              borderColor: '#28a745', // Add custom color border (Line)
              backgroundColor: '#28a745', // Add custom color background (Points and Fill)
              borderWidth: 2 // Specify bar border width
          },
          {
            label: 'Total Decreased', // Name the series
            data: decreased, // Specify the data values array
            fill: false,
            borderColor: '#6c757d', // Add custom color border (Line)
            backgroundColor: '#6c757d', // Add custom color background (Points and Fill)
            borderWidth: 2 // Specify bar border width
        },
        ]
      },
      options: {
        responsive: false, // Instruct chart js to respond nicely.
        maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
        legend: {
          display: false
      },
        scales: {
          xAxes: [{
             scaleLabel: {
                display: false,
                labelString: 'Volunteer Hours',
             },
             gridLines: {
                display: false,
                drawBorder: false //<- set this
             },
             ticks: {
              fontColor: "black",
              // fontSize: 18,
              stepSize: 1,
              beginAtZero: true,
              maxRotation: 80,
              minRotation: 80,
              autoSkip: true,
              // maxTicksLimit: 100
          }
          }],
          yAxes: [{
             gridLines: {
                display: false,
                drawBorder: false //<- set this
             },
             ticks: {
              fontColor: "white",
              // fontSize: 18,
              // stepSize: 1,
              // beginAtZero: true
          }
          }]
       }
      }

  });



  }
}
