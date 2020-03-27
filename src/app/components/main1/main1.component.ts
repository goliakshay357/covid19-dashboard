import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data/data.service"
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


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.get_data()
  }

  async get_data(){
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

    }), err => {
      console.log("Error",err);

    }
  }
}
