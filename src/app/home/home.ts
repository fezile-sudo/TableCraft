
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
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  dishes: Dish[] = [];
  featuredDishes: Dish[] = [];

  loading = true;
  error = '';

  constructor(
    private dishService: DishService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadDishes();
  }

  loadDishes(): void {
    this.loading = true;
    this.error = '';

    this.dishService.getDishes().subscribe({
      next: (dishes: Dish[]) => {
        this.dishes = dishes;

        this.featuredDishes = dishes.filter(
          (dish: Dish) => dish.featured
        );

        this.loading = false;

        this.cdr.markForCheck();
      },

      error: (error: unknown) => {
        console.error('Home dishes error:', error);

        this.error = 'Unable to load dishes.';
        this.loading = false;

        this.cdr.markForCheck();
      }
    });
  }
}

