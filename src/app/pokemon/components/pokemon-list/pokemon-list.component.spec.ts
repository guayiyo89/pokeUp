import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ModalService } from '../../../../app/shared/modal.service';
import { PokemonService } from '../../services/pokemon.service';
import { FilteredCreaturesMock, PokemonCreaturesMock, SortedCreaturesMock } from '../../services/species.mock';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokeSvc: PokemonService;
  let modalSvc: ModalService;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [PokemonService],
      declarations: [ PokemonListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    pokeSvc = TestBed.inject(PokemonService);
    pokeSvc.dataPokemon = PokemonCreaturesMock
    expect(pokeSvc.dataPokemon).toBeInstanceOf(Array)
    fixture.detectChanges();
  });

  afterEach(() => {
    pokeSvc.dataPokemon = PokemonCreaturesMock
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When initializing', () => {
    test('# should call loadPokemons method', () => {
      const spy = jest.spyOn(component, 'loadPokemons');
      component.ngOnInit();
      expect(spy).toHaveBeenCalled();
    })

    test('# should get the value of modalSwitch from the service and has to be false', () => {
      modalSvc = TestBed.inject(ModalService);
      component.ngOnInit();
      modalSvc.$modal.subscribe((val) => expect(val).toBe(false))
    })

    test('# should call sortResult', () => {
      const spy = jest.spyOn(component, 'sortResult');
      component.ngOnInit();
      component.loadPokemons();
      expect(spy).toHaveBeenCalled();
    })

    test('# should call calcularPaginas', () => {
      const spy = jest.spyOn(component, 'calcularPaginas');
      component.ngOnInit();
      component.loadPokemons();
      expect(spy).toHaveBeenCalled();
    })

    test('# should call paginate', () => {
      const spy = jest.spyOn(component, 'paginate');
      component.ngOnInit();
      component.loadPokemons();
      expect(spy).toHaveBeenCalled();
    })

    describe('When loadPokemon is called', () => {
      beforeEach(() => {
        component.ngOnInit();
        component.loadPokemons();
        fixture.detectChanges();
      });

      test('# should sort the result when sortResult is called', () => {
        const sortedRes = SortedCreaturesMock
        const expectedRes = component.listPokemon
  
        component.sortResult(pokeSvc.dataPokemon);
  
        expect(expectedRes).toStrictEqual(sortedRes)
      })
  
      test('# should set the number of lastPage when calcularPaginas is called', () => {
        const expectedRes = component.lastPage
        const numPages = component.pageSize
  
        component.calcularPaginas(pokeSvc.dataPokemon, numPages)
  
        expect(expectedRes).toBe(1)
      })

      test('# should set currentPageResults for the first called', () => {
        const numPages = component.pageSize
        const sortedRes = SortedCreaturesMock
        const expectedRes = component.currentPageResults

        component.paginate(sortedRes, numPages, 1)

        expect(expectedRes).toStrictEqual(sortedRes)
      })

    })

  })

  describe('When some pokemon name of the list is clicked', () => {
    test('Should open the modal and set the status of modalSwitch to true', () => {
      const spy = jest.spyOn(component, 'openModal');
      const pokeListed = fixture.debugElement.query(By.css('.pokemon-listed'))

      pokeListed.nativeElement.click();
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled;
      expect(component.modalSwitch).toBe(true)
    })
  })

  describe('When the data is loaded and sorted', () => {
    beforeEach(() => {
      component.ngOnInit();
      component.loadPokemons();
      component.listPokemon = SortedCreaturesMock;
      fixture.detectChanges();
    });

    test('# showPokemon is called when Buscar is clicked', () => {
      const spy = jest.spyOn(component, 'showPokemon');
      const button = fixture.debugElement.query(By.css('#buscar'))

      button.nativeElement.click();
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled;
    })

    test('# loadPokemons is called when Buscar is clicked', () => {
      const spy = jest.spyOn(component, 'loadPokemons');
      const button = fixture.debugElement.query(By.css('#restart'))

      button.nativeElement.click();
      fixture.detectChanges();

      expect(spy).toHaveBeenCalled;
    })

    test('# set result with filtered values after pressing Buscar', () => {
      const filteredRes = FilteredCreaturesMock
      const button = fixture.debugElement.query(By.css('#buscar'))
      let result = component.results

      button.nativeElement.click();
      component.showPokemon();
      result = component.listPokemon.filter((val) => val.name.includes('iza'))
      fixture.detectChanges();

      expect(result).toStrictEqual(filteredRes);
    })

    
  })
});
