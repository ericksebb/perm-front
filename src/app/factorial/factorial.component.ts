import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { MathService } from '../math.service';

@Component({
  selector: 'app-factorial',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './factorial.component.html',
})
export class FactorialComponent {
  number = 0;
  result: number | null = null;

  constructor(private mathService: MathService) {}

  calculateFactorial() {
    this.mathService.getFactorial(this.number).subscribe({
      next: (response: any) => {
        this.result = response.result;
      },
      error: (err) => {
        console.error('Error fetching factorial:', err);
      }
    });
  }
}