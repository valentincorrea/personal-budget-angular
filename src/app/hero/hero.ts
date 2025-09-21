import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Menu],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
