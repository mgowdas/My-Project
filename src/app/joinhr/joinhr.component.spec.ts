import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinhrComponent } from './joinhr.component';

describe('JoinhrComponent', () => {
  let component: JoinhrComponent;
  let fixture: ComponentFixture<JoinhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinhrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
