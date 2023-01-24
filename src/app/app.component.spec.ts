import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { MainBase } from './pokemon/interfaces/base';
import { MainGeneration } from './pokemon/interfaces/generation-i.interface';
import { data1stGenMock } from './pokemon/services/data-first-gen-mock';
import { mock } from './pokemon/services/data-types-mock';
import { PokemonService } from './pokemon/services/pokemon.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let pokeSvc: PokemonService;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    pokeSvc = TestBed.inject(PokemonService);
    fixture.detectChanges()
  });

  describe('When initializing', () => {
    test('#should create the component', () => {
      expect(component).toBeTruthy();
    });

    test('#should call the loadPokemon function', () => {
      const spy = jest.spyOn(component, 'loadPokemon');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    test('#should call the loadRegions function', () => {
      const spy = jest.spyOn(component, 'loadRegions');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    test('#should call the loadTypes function', () => {
      const spy = jest.spyOn(component, 'loadTypes');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    test('#should call the loadHabitat function', () => {
      const spy = jest.spyOn(component, 'loadHabitat');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    });

    test('#should get the data from loadPokemon and then save it', () => {
      const data: MainGeneration = data1stGenMock;
      const service = TestBed.inject(PokemonService);
      const spy = jest.spyOn(service, 'saveData');
      jest
        .spyOn(service, 'getPokemons1stGen')
        .mockReturnValue(of(data as MainGeneration));

      component.ngOnInit();
      component.loadPokemon();

      service
        .getPokemons1stGen()
        .subscribe((value) => {
          expect(value).toBe(data)
          expect(spy).toHaveBeenCalled
          expect(service.dataPokemon).toBe(data.pokemon_species)
        });
    });

    test('#should get the data from loadHabitat and then save it', () => {
      const data: MainBase = mock;
      const service = TestBed.inject(PokemonService);
      const spy = jest.spyOn(service, 'saveHabitatData');
      jest
        .spyOn(service, 'getHabitat')
        .mockReturnValue(of(data as MainBase));

      component.ngOnInit();
      component.loadHabitat()

      service
        .getHabitat()
        .subscribe((value) => {
          expect(value).toBe(data)
          expect(spy).toHaveBeenCalled
          expect(service.dataHabitat).toBe(data.results)
        });
    });

    test('#should get the data from loadTypes and then save it', () => {
      const data: MainBase = mock;
      const service = TestBed.inject(PokemonService);
      const spy = jest.spyOn(service, 'saveTypeData');
      jest
        .spyOn(service, 'getTypes')
        .mockReturnValue(of(data as MainBase));

      component.ngOnInit();
      component.loadTypes()

      service
        .getTypes()
        .subscribe((value) => {
          expect(value).toBe(data)
          expect(spy).toHaveBeenCalled
          expect(service.dataTypes).toBe(data.results)
        });
    });

    test('#should get the data from loadRegions and then save it', () => {
      const data: MainBase = mock;
      const service = TestBed.inject(PokemonService);
      const spy = jest.spyOn(service, 'saveRegionData');
      jest
        .spyOn(service, 'getRegions')
        .mockReturnValue(of(data as MainBase));

      component.ngOnInit();
      component.loadRegions()

      service
        .getRegions()
        .subscribe((value) => {
          expect(value).toBe(data)
          expect(spy).toHaveBeenCalled
          expect(service.dataRegion).toBe(data.results)
        });
    });

    test('#should do match with snapshot', () => {
      expect(compiled.innerHTML).toMatchSnapshot();
    });
  });
});
