import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grp4Component } from './grp4.component';

describe('Grp4Component', () => {
  let component: Grp4Component;
  let fixture: ComponentFixture<Grp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Grp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Grp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
