import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { mock } from '../../services/data-types-mock';
import { PokemonService } from '../../services/pokemon.service';
import { habitatMock, regionMock, typeMock } from '../../services/pokepedia.mocks';

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
    pokeSvc.dataHabitat = habitatMock
    pokeSvc.dataTypes = typeMock
    pokeSvc.dataRegion = regionMock
    expect(pokeSvc.dataHabitat).toBeInstanceOf(Array)
    expect(pokeSvc.dataTypes).toBeInstanceOf(Array)
    expect(pokeSvc.dataRegion).toBeInstanceOf(Array)
    fixture.detectChanges();
  });

  describe('When initializing', () => {
    test('should create', () => {
      expect(component).toBeTruthy();
    });

    test('#should do match with snapshot', () => {
      expect(compiled.innerHTML).toMatchSnapshot();
    });

    test('# should set tipos with data from service', () => {
      component.ngOnInit();
      expect(component.tipos).toStrictEqual(pokeSvc.dataTypes);
    })

    test('# should set regiones with data from service', () => {
      component.ngOnInit();
      expect(component.regiones).toStrictEqual(pokeSvc.dataRegion);
    })

    test('# should set habitats with data from service', () => {
      component.ngOnInit();
      expect(component.habitats).toStrictEqual(pokeSvc.dataHabitat);
    })
  })

});
