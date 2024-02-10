import { UserApiMapper } from './user-api.mapper';

describe('AppComponent', () => {
  let userApiMapper: UserApiMapper;

  beforeEach(async () => {
    userApiMapper = new UserApiMapper();
  });

  it('should create the dependency', () => {
    expect(userApiMapper).toBeTruthy();
  });

  it('should test mapTo', () => {
    expect(userApiMapper.mapTo().login).toBe('');
  });
});
