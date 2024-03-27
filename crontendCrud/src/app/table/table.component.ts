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
  size = 10;
  data : any = null;

  loadData = (page: number, size: number) => {
    this.employeeService.get(page, size).subscribe(remoteData => {this.data = remoteData._embedded.employees; console.log(this.data)});
  } 

  ngOnInit(){
    this.loadData(this.page, this.size);
  }
}
