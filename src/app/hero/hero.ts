import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../home/home';
import { About } from '../about/about';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
