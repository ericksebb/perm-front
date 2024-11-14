import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearPermutationComponent } from './linear-permutation.component';

describe('LinearPermutationComponent', () => {
  let component: LinearPermutationComponent;
  let fixture: ComponentFixture<LinearPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearPermutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinearPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
