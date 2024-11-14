import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CircularPermutationComponent } from './circular-permutation/circular-permutation.component';
import { FactorialComponent } from './factorial/factorial.component';
import { LinearPermutationComponent } from './linear-permutation/linear-permutation.component';
import { RepetitionPermutationComponent } from './repetition-permutation/repetition-permutation.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzButtonModule,
    NzInputModule,
    CircularPermutationComponent,
    FactorialComponent,
    LinearPermutationComponent,
    RepetitionPermutationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'perm-front';
}
