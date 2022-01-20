import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showForm:boolean = false;
  phnNumber = '+91 ';
  email = '';
  panNumber = '';
  name = '';
  phnValidations = false;
  emailValidations = false;
  constructor() { }

  ngOnInit(): void {
  }

  showDialog(){
    this.showForm = true;
  }

  phnNumChange(newValue:any){
    var value:string = newValue.target.value;
    var valueWithoutCharectors = value.replace('+','').replace(' ','');
    if(value.startsWith('+91') && value.indexOf(' ') === 3 && value.length === 14 && !isNaN(Number(valueWithoutCharectors))) {
      this.phnValidations = true;
    } else {
      this.phnValidations = false;
    }

  }

  emailChange(newValue: any){
    var value:string = newValue.target.value;
    if(value.includes('@') && value.endsWith('.com')){
      this.emailValidations = true;
    } else {
      this.emailValidations = false;
    }
  }

  close(){
    this.showForm = false;
  }
}
