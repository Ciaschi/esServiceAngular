import { Component, OnInit} from '@angular/core';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{

  constructor(private employeeService:EmployeeService ){}

  title = "Employee list";
  page = 0;
  size = 20;
  data : any = null;

  loadData = () => {
    this.employeeService.get(this.page, this.size).subscribe((remoteData: { _embedded: { employees: any; }; }) => {this.data = remoteData; console.log(this.data)});
  } 

  deleteEmp = (id : number) => {
    this.employeeService.delete(id).subscribe((remoteData) => {this.loadData()});
  }

  ngOnInit(){
    this.loadData();
  }

  pageControl = (c : String) => {
    switch(c){
      case "fp":
        this.page = 0;
        break;
      case "-p":
        this.page--;
        break;
      case "+p":
        this.page++;
        break;
      case "lp":
        this.page = 14999;
        break;
    }
    this.loadData();
  }
}
