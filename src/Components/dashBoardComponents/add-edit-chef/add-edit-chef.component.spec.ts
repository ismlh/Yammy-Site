import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChefComponent } from './add-edit-chef.component';

describe('AddEditChefComponent', () => {
  let component: AddEditChefComponent;
  let fixture: ComponentFixture<AddEditChefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditChefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
