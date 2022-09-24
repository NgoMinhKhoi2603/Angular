import {Component} from "@angular/core";
import {IFoodMenu, IMenu} from "../interfaces/foodmenu.interface";
import {HttpClient} from "@angular/common/http";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html'
})
export class FoodComponent{
  data1:IMenu[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {

  }

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url='https://foodgroup.herokuapp.com/api/menu';
    this.http.get<IFoodMenu>(url).subscribe(data=>{
      this.data1 = data.data;
    })
  }
}
