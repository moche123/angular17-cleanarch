import { of } from 'rxjs';
import { UserImplementationRepository } from './user-implementation.repository';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../../domain/models/user.model';

describe('AppComponent', () => {
  let userImplementationRepository: UserImplementationRepository;
  const mockExampleUser = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    name: '',
    company: '',
    location: '',
  };

  const mockHttpClient = {
    get: jasmine.createSpy('get').and.returnValue(of(mockExampleUser)),
    post: jasmine.createSpy('get').and.returnValue(of([mockExampleUser])),
  };

  beforeEach(async () => {
    userImplementationRepository = new UserImplementationRepository(
      <HttpClient>(<unknown>mockHttpClient)
    );
  });

  it('should create the dependency', () => {
    expect(userImplementationRepository).toBeTruthy();
  });

  it('should test getUser', () => {
    userImplementationRepository.getUser('test').subscribe((res: IUser) => {
      expect(res).toBeDefined();
    });
  });

  it('should test addUser', () => {
    userImplementationRepository.addUser(mockExampleUser).subscribe(res => {
      expect(res).toBeDefined();
    });
  });
});
