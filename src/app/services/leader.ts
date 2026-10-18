import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Leader } from '../shared/leader';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {
  private readonly apiUrl = `${environment.apiUrl}/team`;

  constructor(private http: HttpClient) {}

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(this.apiUrl);
  }

  getLeader(id: string): Observable<Leader> {
    return this.http.get<Leader>(`${this.apiUrl}/${id}`);
  }
}


