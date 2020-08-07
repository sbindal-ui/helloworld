import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LIKEComponent } from './like.component';

describe('LIKEComponent', () => {
  let component: LIKEComponent;
  let fixture: ComponentFixture<LIKEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LIKEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LIKEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
