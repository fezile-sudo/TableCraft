
import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export class Menu implements OnInit {

  dishes: Dish[] = [];

  starters: Dish[] = [];
  mains: Dish[] = [];
  sides: Dish[] = [];
  desserts: Dish[] = [];

  loading = true;
  error = '';

  constructor(
    private dishService: DishService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(): void {
    this.loading = true;
    this.error = '';

    this.cdr.markForCheck();

    this.dishService.getDishes().subscribe({

      next: (dishes: Dish[]) => {
        this.dishes = dishes;

        this.starters = dishes.filter(
          dish => dish.category === 'starter'
        );

        this.mains = dishes.filter(
          dish => dish.category === 'main'
        );

        this.sides = dishes.filter(
          dish => dish.category === 'side'
        );

        this.desserts = dishes.filter(
          dish => dish.category === 'dessert'
        );

        this.loading = false;
        this.error = '';

        this.cdr.markForCheck();

        console.log('MENU: dishes loaded', dishes.length);
      },

      error: (err: unknown) => {
        console.error('MENU: HTTP ERROR', err);

        this.error = 'Unable to load the menu.';
        this.loading = false;

        this.cdr.markForCheck();
      }

    });
  }
}







