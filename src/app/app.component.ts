import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<div>
  //     <h1>{{pageHeader}}</h1>
  //     <img src='https://www.pragimtech.com/{{imgUrl}}'/>
  //     <my-employee></my-employee>
  //     <button [disabled]='isDisabled' (onclick)='getCount'> Click Me </button> 
  // </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titile:string="Angular !";
  pageHeader:string = 'Employee Details';
  imgUrl:string='wp-content/uploads/2019/02/pargim-logo-1.png';
  isDisabled:boolean=false;
  count:number=0;
  columnSpan:number=2;
  public getCount=()=>{
    alert(this.count);
    this.count+=1;
  }
}

// to Set nonstring value we must use [property binding]
// to concatinate strings we must use {{interpolation}}
// interpolation is special syntax which will convert into property binding.