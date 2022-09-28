import {Component} from "@angular/core";
import {IFoodMenu, IMenu} from "../interfaces/foodmenu.interface";
import {HttpClient} from "@angular/common/http";
import {subscribeOn} from "rxjs";
import {IFood} from "../interfaces/food.interface";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html'
})
export class FoodComponent{
  data1:IMenu[] = [];
  foods: IFood[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {

  }

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url='https://foodgroup.herokuapp.com/api/menu';
    this.http.get<IFoodMenu>(url).subscribe(data=>{
      this.data1 = data.data;
    })

    const url2='https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<{data:IFood[]}>(url2).subscribe(data=>{
      this.foods = data.data;
    })
  }
}
