import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { MathService } from '../math.service';

@Component({
  selector: 'app-circular-permutation',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './circular-permutation.component.html',
})
export class CircularPermutationComponent {
  n = 0;
  result: number | null = null;

  constructor(private mathService: MathService) {}

  calculateCircularPermutation() {
    this.mathService.getCircularPermutation(this.n).subscribe({
      next: (response: any) => {
        this.result = response.result;
      },
      error: (err) => {
        console.error('Error fetching circular permutation:', err);
      }
    });
  }
}
