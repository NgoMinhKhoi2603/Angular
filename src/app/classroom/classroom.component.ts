import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html'
})
export class ClassroomComponent extends Component{
  classroomName= 'T2207E';
  numberstudents= 12;
  @Input()
  clName ?: string;

  upNumber(){
    this.numberstudents *= 9999999999999999999999;
  }

  studentName = 'Thế Đụ';
  studentName1 = 'Thế Đụ 2';
  studentName2 = 'Thế Đụ 3';
}
