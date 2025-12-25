import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tudo2Component } from './tudo2.component';

describe('Tudo2Component', () => {
  let component: Tudo2Component;
  let fixture: ComponentFixture<Tudo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tudo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tudo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
