import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-about',
  imports: [Hero],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
