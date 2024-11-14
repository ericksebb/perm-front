import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitionPermutationComponent } from './repetition-permutation.component';

describe('RepetitionPermutationComponent', () => {
  let component: RepetitionPermutationComponent;
  let fixture: ComponentFixture<RepetitionPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepetitionPermutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepetitionPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
