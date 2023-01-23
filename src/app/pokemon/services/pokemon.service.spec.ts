import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../../../environments/urls';
import { MainGeneration } from '../interfaces/generation-i.interface';
import { data1stGenMock } from './data-first-gen-mock';
import { MainBase } from '../interfaces/base';
import { mock } from './data-types-mock';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpTesting: HttpTestingController;
  let client: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonService);
    httpTesting = TestBed.inject(HttpTestingController)
    client = TestBed.inject(HttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('#should get data from getPokemon1stGen', () => {
    const expectedData: MainGeneration = data1stGenMock;

    client.get(URLS.pokemon1stGen).subscribe((data) => {
      expect(data).toEqual(expectedData)
    })

    const testReq = httpTesting.expectOne(URLS.pokemon1stGen);
    testReq.flush(expectedData, {status: 200, statusText: 'listo'})
  })

  test('#should get the type data from getTypes', () => {
    const expectedData: MainBase = mock;

    client.get(URLS.getTypes).subscribe((data) => {
      expect(data).toEqual(expectedData)
    })

    const testReq = httpTesting.expectOne(URLS.getTypes);
    testReq.flush(expectedData, {status: 200, statusText: 'listo'})
  })

  test('#should get the type data from getHabitats', () => {
    const expectedData: MainBase = mock;

    client.get(URLS.getHabitats).subscribe((data) => {
      expect(data).toEqual(expectedData)
    })

    const testReq = httpTesting.expectOne(URLS.getHabitats);
    testReq.flush(expectedData, {status: 200, statusText: 'listo'})
  })

  test('#should get the type data from getRegions', () => {
    const expectedData: MainBase = mock;

    client.get(URLS.getRegion).subscribe((data) => {
      expect(data).toEqual(expectedData)
    })

    const testReq = httpTesting.expectOne(URLS.getRegion);
    testReq.flush(expectedData, {status: 200, statusText: 'listo'})
  })

  test('#should get the Pokemon data data from getPokemonData', () => {
    const expectedData: MainBase = mock;

    client.get(URLS.getPokemonData).subscribe((data) => {
      expect(data).toEqual(expectedData)
    })

    const testReq = httpTesting.expectOne(URLS.getPokemonData);
    testReq.flush(expectedData, {status: 200, statusText: 'listo'})
  })

});
