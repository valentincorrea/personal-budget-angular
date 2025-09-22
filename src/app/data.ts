import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myBudget } from '../budget-data.json';
import { budgetModel } from '../model/budget';

@Injectable({
  providedIn: 'root',
})
// export class Data {

// }
export class Data {
  apiBudgetDataUrl = 'http://localhost:3000/';
  constructor(private HttpClient: HttpClient) {}
  getBudgetData() {
    return this.HttpClient.get<budgetModel[]>(this.apiBudgetDataUrl + 'myBudget');
  }
}
