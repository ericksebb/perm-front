import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { MathService } from '../math.service';

@Component({
  selector: 'app-linear-permutation',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './linear-permutation.component.html',
})
export class LinearPermutationComponent {
  n = 0;
  r = 0;
  result: number | null = null;

  constructor(private mathService: MathService) {}

  calculateLinearPermutation() {
    this.mathService.getLinearPermutation(this.n, this.r).subscribe({
      next: (response: any) => {
        this.result = response.result;
      },
      error: (err) => {
        console.error('Error fetching linear permutation:', err);
      }
    });
  }
}
