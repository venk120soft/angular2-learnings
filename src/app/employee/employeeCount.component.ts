import {Component, Input,EventEmitter, Output} from '@angular/core';

@Component({
selector:'employee-count',
templateUrl:'./employeeCount.component.html'
})
export class EmployeeCountComponent{
    @Input()
    all:number;
    @Input()
    male:number;
    @Input()
    female:number;

    selectedRadioButtonValue:string="All";

    //custom event create
    @Output()
    countRadioButtonSelectionChanged:EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChange(){
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }

}