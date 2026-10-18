import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Dish, Comment } from '../shared/dish';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private readonly apiUrl = `${environment.apiUrl}/dishes`;
  private readonly commentsUrl = `${environment.apiUrl}/comments`;

  constructor(private http: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.apiUrl);
  }

  getDish(id: string): Observable<Dish> {
    return this.http.get<Dish>(`${this.apiUrl}/${id}`);
  }

  getComments(dishId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${this.commentsUrl}/dish/${dishId}`
    );
  }

  addComment(comment: {
    dishId: string;
    rating: number;
    author: string;
    comment: string;
  }): Observable<Comment> {

    return this.http.post<Comment>(
      this.commentsUrl,
      comment
    );
  }

}

