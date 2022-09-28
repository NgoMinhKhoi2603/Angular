import {Component} from "@angular/core";
import {IFoodMenu, IMenu} from "../interfaces/foodmenu.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-food2',
  templateUrl: './food2.component.html'
})
export class Food2Component{
  data2:IMenu[] = [];

  //tim cach lay du lieu tu api roi cho vao bien data
  constructor(private http: HttpClient) {

  }

  ngOnInit(){ //ham nay tu dong chay khi print giao dien ra
    const url2='https://foodgroup.herokuapp.com/api/today-special';
    this.http.get<IFoodMenu>(url2).subscribe(data2=>{
      this.data2 = data2.data;
    })
  }
}
