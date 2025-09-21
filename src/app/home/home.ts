import { Component } from '@angular/core';
import { About } from '../about/about';
import { Hero } from '../hero/hero';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-home',
  imports: [Hero, Breadcrumbs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
