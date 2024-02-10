import { UserRepository } from '../repositories/user.repository';
import { GetUserUseCase } from './get-user.usecase';

describe('AppComponent', () => {
  let getUserUseCase: GetUserUseCase;
  const mockExampleUser = {
    login: '',
    id: 0,
    node_id: '',
    avatar_url: '',
    name: '',
    company: '',
    location: '',
  };

  const mockUserRepository = {
    getUser: jasmine.createSpy('getUser').and.returnValue(mockExampleUser),
  };

  beforeEach(async () => {
    getUserUseCase = new GetUserUseCase(
      <UserRepository>(<unknown>mockUserRepository)
    );
  });

  it('should create', () => {
    expect(getUserUseCase).toBeTruthy();
  });

  it('should test execute', () => {
    getUserUseCase.execute('nick').subscribe(res => {
      expect(res).toBeDefined();
    });
  });
});
