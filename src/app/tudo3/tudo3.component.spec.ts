import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tudo3Component } from './tudo3.component';

describe('Tudo3Component', () => {
  let component: Tudo3Component;
  let fixture: ComponentFixture<Tudo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tudo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tudo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
