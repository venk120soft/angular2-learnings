import {Component} from '@angular/core';

@Component 
({
    selector:'my-employee-list',
    templateUrl:`./employeeList.component.html`,
    styleUrls:[`./employee.component.css`]
})
export class EmployeeListComponent{

    employees:any[];

    selectedEmplyeeCountRadioButton:string='All';

    constructor(){
    this.employees =[
        { code:101, firstName :'Tom', lastName: 'Hopkins', gender:'Male', salary:25, dob:'2/17/1990' },
        { code:102, firstName :'Firoz', lastName: 'Shah', gender:'Male', salary:30, dob:'5/16/1989' },
        { code:103, firstName :'Shaik', lastName: 'Kamal', gender:'Male', salary:37, dob:'10/26/1982' },
        { code:104, firstName :'Alex', lastName: 'Filot', gender:'Male', salary:40, dob:'2/14/1980' },
        { code:105, firstName :'Matt', lastName: 'Stankiewicz', gender:'Male', salary:41, dob:'12/19/1979' },
        { code:106, firstName :'Begum', lastName: 'Gousha', gender:'Female', salary:40, dob:'2/12/1998' }
    ];
}
    sortByFirstName=()=>{
        debugger;
        this.employees= this.employees.sort(x=>x.code);
    };

    getEmployees():void{
        const emp={ code:107, firstName :'yung', lastName: 'Amy', gender:'Female', salary:41, dob:'7/9/1990' };
        const index=this.employees.findIndex(x=>x.code==emp.code);
        if(index==-1){
            this.employees.push(emp);
        }
    }

    trackByEmpCode(index:number,employee:any):string{
        return employee.code;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue:string):void{
        this.selectedEmplyeeCountRadioButton=selectedRadioButtonValue;
    }

    getTotalEmployeesCount():number{
        debugger;
        return this.employees.length;

    }

    getTotalMaleEmployeesCount():number{
        return this.employees.filter(e=>e.gender==='Male').length;
    }

    getTotalFemaleEmployeesCount():number{
        return this.employees.filter(e=>e.gender==='Female').length;
    }
} 