import { Component } from '@angular/core';
import { About } from '../about/about';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
