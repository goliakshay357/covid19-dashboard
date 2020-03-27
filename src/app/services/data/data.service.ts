import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  public get_data(){
    return this.http.get("https://api.covid19india.org/data.json")
  }
}
