import { TestBed } from '@angular/core/testing';

import { EventoService } from './sevicios/evento.service';

describe('EventoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoService = TestBed.get(EventoService);
    expect(service).toBeTruthy();
  });
});
