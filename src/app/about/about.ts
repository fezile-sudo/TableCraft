
import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {

  leaders: Leader[] = [];

  loading = true;
  error: string | null = null;

  constructor(
    private leaderService: LeaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadLeaders();
  }

  loadLeaders(): void {
    this.loading = true;
    this.error = null;

    this.leaderService.getLeaders().subscribe({
      next: (leaders: Leader[]) => {
        this.leaders = leaders;
        this.loading = false;

        console.log('Team loaded:', leaders.length);

        this.cdr.markForCheck();
      },

      error: (error: unknown) => {
        console.error('Team error:', error);

        this.loading = false;
        this.error =
          'Unable to load our team. Please try again later.';

        this.cdr.markForCheck();
      }
    });
  }
}
