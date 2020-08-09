import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherUserProfilComponent } from './other-user-profil.component';

describe('OtherUserProfilComponent', () => {
  let component: OtherUserProfilComponent;
  let fixture: ComponentFixture<OtherUserProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherUserProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherUserProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
