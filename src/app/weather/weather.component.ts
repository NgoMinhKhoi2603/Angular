import {Component} from "@angular/core";
import {IWeather, List, Main} from "../interfaces/weather.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent{
  main: Main[]=[];
  list: List[]=[];

  constructor(private http: HttpClient) {

  }

  ngOnInit(){
    const url='https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric';
    this.http.get<IWeather>(url).subscribe(data=>{
      this.list = data.list;
    })
  }
}
