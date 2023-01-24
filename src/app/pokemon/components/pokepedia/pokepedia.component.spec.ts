import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonService } from '../../services/pokemon.service';

import { PokepediaComponent } from './pokepedia.component';

describe('PokepediaComponent', () => {
  let component: PokepediaComponent;
  let fixture: ComponentFixture<PokepediaComponent>;
  let pokeSvc: PokemonService;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ PokepediaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokepediaComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    pokeSvc = TestBed.inject(PokemonService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
