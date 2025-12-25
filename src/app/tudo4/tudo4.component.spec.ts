import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tudo4Component } from './tudo4.component';

describe('Tudo4Component', () => {
  let component: Tudo4Component;
  let fixture: ComponentFixture<Tudo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tudo4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tudo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
