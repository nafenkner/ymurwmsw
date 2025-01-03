import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesDetailsComponent } from './recipies-details.component';

describe('BookDetailsComponent', () => {
  let component: RecipiesDetailsComponent;
  let fixture: ComponentFixture<RecipiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
