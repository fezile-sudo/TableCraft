
import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Dish, Comment } from '../shared/dish';
import { DishService } from '../services/dish';

import { catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-dishdetail',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './dishdetail.html',
  styleUrls: ['./dishdetail.scss']
})
export class Dishdetail implements OnInit {

  dish: Dish | null = null;

  loading = true;
  error = '';

  comments: Comment[] = [];

  commentDialogOpen = false;

  newComment: Comment = {
    rating: 5,
    author: '',
    comment: ''
  };

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.route.paramMap.pipe(

      tap(() => {
        this.loading = true;
        this.error = '';
        this.dish = null;
        this.comments = [];

        this.cdr.markForCheck();
      }),

      switchMap(params => {

        const id = params.get('id');

        if (!id) {
          this.error = 'Dish not found.';
          return of(null);
        }

        return this.dishService.getDish(id).pipe(

          catchError((err: unknown) => {
            console.error('Dish error:', err);

            this.error = 'Unable to load this dish.';

            return of(null);
          })

        );

      })

    ).subscribe({

      next: (dish: Dish | null) => {

        this.loading = false;

        if (!dish) {
          this.cdr.markForCheck();
          return;
        }

        this.dish = dish;
        this.error = '';

        this.cdr.markForCheck();

        const dishId = dish._id || dish.id;

        if (!dishId) {
          console.error('Dish has no ID:', dish);
          return;
        }

        this.dishService.getComments(dishId).subscribe({

          next: (comments: Comment[]) => {
            this.comments = comments;

            this.cdr.markForCheck();

            console.log('DISH COMMENTS:', comments.length);
          },

          error: (err: unknown) => {
            console.error('Comments error:', err);

          
            this.comments = [];

            this.cdr.markForCheck();
          }

        });

      },

      error: (err: unknown) => {
        console.error('Dish detail error:', err);

        this.error = 'Unable to load this dish.';
        this.loading = false;

        this.cdr.markForCheck();
      }

    });

  }

  goBack(): void {
    this.location.back();
  }

  // Open comment dialog
  openCommentDialog(): void {
    this.newComment = {
      rating: 5,
      author: '',
      comment: ''
    };

    this.commentDialogOpen = true;
  }

  closeCommentDialog(): void {
    this.commentDialogOpen = false;
  }

  submitComment(): void {

    const author = this.newComment.author.trim();
    const commentText = this.newComment.comment.trim();

    if (!author || !commentText || !this.dish) {
      return;
    }

    const dishId = this.dish._id || this.dish.id;

    if (!dishId) {
      console.error('Cannot submit comment: dish ID is missing.');
      return;
    }

    const commentData = {
      dishId,
      rating: this.newComment.rating,
      author,
      comment: commentText
    };

    console.log('ADDING COMMENT:', commentData);

    this.dishService.addComment(commentData).subscribe({

      next: (savedComment: Comment) => {

        this.comments = [
          savedComment,
          ...this.comments
        ];

        this.closeCommentDialog();

        this.cdr.markForCheck();

        console.log('COMMENT SAVED:', savedComment);
      },

      error: (err: unknown) => {
        console.error('Comment save error:', err);
      }

    });

  }

}













 
