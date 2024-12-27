import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBookComponent } from './client-book.component';

describe('ClientBookComponent', () => {
  let component: ClientBookComponent;
  let fixture: ComponentFixture<ClientBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
