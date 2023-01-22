import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokepediaComponent } from './pokepedia.component';

describe('PokepediaComponent', () => {
  let component: PokepediaComponent;
  let fixture: ComponentFixture<PokepediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokepediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokepediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
