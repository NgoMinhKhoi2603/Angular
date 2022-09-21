import {Component} from "@angular/core";
import {IStudent} from "../../interfaces/student.interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends Component{
  student: IStudent = {id:1,name:'Nam',age:17,address:'8A Ton That Thuyet'}
}
