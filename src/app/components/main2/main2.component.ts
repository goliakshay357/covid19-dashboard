import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service"
// import { SuperTable, SuperTableColumn } from 'ngx-super-table';

declare let Chart:any;

@Component({

  selector: 'app-main2',
  templateUrl: './main2.component.html',
  styleUrls: ['./main2.component.scss']
})
export class Main2Component implements OnInit {
//
  constructor(private dataService: DataService) { }
  data_API:any;

  ngOnInit() {
    this.get_data()
    // this.horizontalBar()

  }

  get_data(){
    this.dataService.get_data().subscribe(res => {
      console.log(res.json(), "the got data");
      this.data_API = res.json()

      var table = document.getElementById('table');
      console.log("tablex",table);

      var mydata = this.data_API.statewise
      console.log(mydata,"Tables data");

      var list = document.getElementById('appendtable')
      console.log(list,"listtt");

      var vertical_states =[]
      var states_confired =[]

      for(let i=1;i<mydata.length;i++){
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')

        td1.innerHTML = mydata[i].state
        td2.innerHTML = mydata[i].confirmed
        td3.innerHTML = mydata[i].active
        td4.innerHTML = mydata[i].deaths

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)

        list.appendChild(tr)

        // for horizontal bar plotting
        if(i<11){
          vertical_states.push(mydata[i].state)
          states_confired.push(Number(mydata[i].confirmed))
        }

      }

      this.horizontalBar(vertical_states,states_confired)


    }), err => {
      console.log("Error",err);
    }
  }

  async horizontalBar(states,confirmed){
    var ctx1:any = document.getElementById('myChart1')
    var width = document.getElementById('col1')
    ctx1.width = width.clientWidth
    // ctx1.height = width.clientHeight - 450
    console.log("Entered");
    var myChart:any = new Chart(ctx1, {


      type: 'horizontalBar',
      data: {
        labels: states,
        datasets: [{
           data: confirmed,
           backgroundColor: ["#ce3131","#d82727","#e21d1d","#ff3b3b", "#ff4e4e", "#ff6262", "#ff7676", "#ff8989", "#ff9d9d", "#ffb1b1"],
        }]
     },
     options: {
      tooltips: {
        enabled: true
      },
      responsive: false,
      legend: {
         display: false,
         position: 'bottom',
         fullWidth: true,
         labels: {
           boxWidth: 10,
           padding: 50
         }
      },
      scales: {
         yAxes: [{
           barPercentage: 0.75,
           gridLines: {
             display: true,
             drawTicks: true,
             drawOnChartArea: false
           },
           ticks: {
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11
           }

         }],
         xAxes: [{
             gridLines: {
               display: true,
               drawTicks: false,
               tickMarkLength: 5,
               drawBorder: false
             },
           ticks: {
             padding: 5,
             beginAtZero: true,
             fontColor: '#555759',
             fontFamily: 'Lato',
             fontSize: 11,
            //  callback: function(label, index, labels) {
            //   return label/1000;
             }

           }

         ]},
      }
   }

    )}
  }
