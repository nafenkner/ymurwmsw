import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiesComponent } from './recipes.component';

describe('BooksComponent', () => {
  let component: RecipiesComponent;
  let fixture: ComponentFixture<RecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
