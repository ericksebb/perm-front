import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularPermutationComponent } from './circular-permutation.component';

describe('CircularPermutationComponent', () => {
  let component: CircularPermutationComponent;
  let fixture: ComponentFixture<CircularPermutationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularPermutationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircularPermutationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
