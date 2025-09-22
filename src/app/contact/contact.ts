import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-contact',
  imports: [Hero],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
