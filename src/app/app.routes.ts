// This file defines the routes for the Angular application.
// On the video tutorial, the components are structured differently: MenuComponent
// and the from part of the import statement is different too: from './menu/menuComponent';
// Since we did create the component folder, the path should be from './menu/menu'.
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
// import { Hero } from './hero/hero';
import { Router } from 'express';
import { About } from './about/about';
// Exposing the budget API

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
];
