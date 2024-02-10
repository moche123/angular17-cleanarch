import { of } from 'rxjs';
import { GetUserUseCase } from '../../domain/use-cases/get-user.usecase';
import { AppComponent } from './app.component';
import { fakeAsync, flush } from '@angular/core/testing';

describe('AppComponent', () => {
  let app: AppComponent;
  const mockGetUserUseCase = {
    execute: jasmine.createSpy('execute').and.returnValue(of({})),
  };

  beforeEach(async () => {
    app = new AppComponent(<GetUserUseCase>(<unknown>mockGetUserUseCase));
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should test OnInit', fakeAsync(() => {
    app.ngOnInit();
    flush();
    app.user$.subscribe(res => {
      expect(res).toBeDefined();
    });
  }));
});
