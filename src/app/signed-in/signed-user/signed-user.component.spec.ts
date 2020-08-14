import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedUserComponent } from './signed-user.component';

describe('SignedUserComponent', () => {
  let component: SignedUserComponent;
  let fixture: ComponentFixture<SignedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
