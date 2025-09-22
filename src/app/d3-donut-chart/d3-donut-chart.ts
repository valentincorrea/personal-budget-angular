import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import * as d3 from 'd3';
import { Data } from '../data';
import { HttpClient } from '@angular/common/http';
import { budgetModel } from '../../model/budget';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-d3-donut-chart',
  imports: [],
  templateUrl: './d3-donut-chart.html',
  styleUrl: './d3-donut-chart.scss',
})
// export class D3DonutChart {

// }
export class D3DonutChart implements OnInit, OnDestroy {
  _list: budgetModel[] = [];
  subs = new Subscription();
  constructor(private service: Data) {}

  getListOfObjects() {
    this.service.getBudgetData().subscribe((item) => {
      this._list = item;
    });
  }
  ngOnInit(): void {
    this.getListOfObjects();
    console.log(this._list);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
