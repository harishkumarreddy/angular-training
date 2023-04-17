import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntryFormComponent } from './user-entry-form.component';

describe('UserEntryFormComponent', () => {
  let component: UserEntryFormComponent;
  let fixture: ComponentFixture<UserEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEntryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
