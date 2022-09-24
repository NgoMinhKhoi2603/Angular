import {Component} from "@angular/core";
import {IStudent} from "../../interfaces/student.interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends Component{
  student: IStudent = {id:1,name:'Nam',age:17,address:'8A Ton That Thuyet'}

  arrayNumber: number[] = [1,2,3,4,5];

  stringArray: string[] = ['The du', 'The du 2'];

  ls: IStudent[] = [
    {id:1, name:"The du", age:19, address: '8A Ton That Thuyet'},
    {id:2, name:"The du 2", age:17, address: '8A Ton That Thuyet'},
    {id:3, name:"The du 3", age:12, address: '8A Ton That Thuyet'},
  ]
}
