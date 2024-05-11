import { TestBed } from '@angular/core/testing';

import { CardsInterceptor } from './cards.interceptor';

describe('CardsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CardsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CardsInterceptor = TestBed.inject(CardsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
