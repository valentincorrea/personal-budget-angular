import { Component } from '@angular/core';
import { About } from '../about/about';
import { Hero } from '../hero/hero';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';
import { D3DonutChart } from '../d3-donut-chart/d3-donut-chart';

@Component({
  selector: 'app-home',
  imports: [Hero, Breadcrumbs, D3DonutChart],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
