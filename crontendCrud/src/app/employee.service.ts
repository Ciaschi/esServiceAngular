import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private httpClient: HttpClient) { }

  get(page: number, size: number){
    return this.httpClient.get<any>("http://localhost:8080/employees?page=0&size=10");
  }
}
