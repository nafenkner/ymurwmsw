import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditRecipeComponent } from './edit-recipe.component';

describe('AppEditRecipeComponent', () => {
  let component: AppEditRecipeComponent;
  let fixture: ComponentFixture<AppEditRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEditRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppEditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
