import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grp6Component } from './grp6.component';

describe('Grp6Component', () => {
  let component: Grp6Component;
  let fixture: ComponentFixture<Grp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grp6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
