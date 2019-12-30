import {Component} from '@angular/core';

@Component 
({
    selector:'my-employee',
    templateUrl:`./employee.component.html`,
    styleUrls:[`./employee.component.css`]
})
export class EmployeeComponent{
    name:string='Venkatesh!';

    firstName:string='Tom';
    lastName:string='Hopkins';
    gender:string='Male';
    age:number=25;
    showDetails:boolean=false;
    
    toggleDetails():void{
        this.showDetails =!this.showDetails;
    }
} 