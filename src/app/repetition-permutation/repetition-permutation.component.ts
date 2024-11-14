import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { MathService } from '../math.service';

@Component({
  selector: 'app-repetition-permutation',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './repetition-permutation.component.html',
})
export class RepetitionPermutationComponent {
  n = 0;
  counts = '';
  result: number | null = null;

  constructor(private mathService: MathService) {}

  calculateRepetitionPermutation() {
    const countsArray = this.counts.split(',').map(num => parseInt(num.trim(), 10));
    this.mathService.getRepetitionPermutation(this.n, countsArray).subscribe({
      next: (response: any) => {
        this.result = response.result;
      },
      error: (err) => {
        console.error('Error fetching repetition permutation:', err);
      }
    });
  }
}
