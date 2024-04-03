import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private httpClient: HttpClient) { }

  get(page: number, size: number){
    return this.httpClient.get<any>(`http://localhost:8080/employees?page=`+page+`&size`+size);
  }

  delete (id : number){
    return this.httpClient.delete(`http://localhost:8080/employees/${id}`, {});
  }

  add(newEmployee : Employee){
    return this.httpClient.get<any>(`http://localhost:8080/employees/` + newEmployee);
  }
}
