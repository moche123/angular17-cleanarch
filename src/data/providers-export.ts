import { UserRepository } from '../domain/repositories/user.repository';
import { GetUserUseCase } from '../domain/use-cases/get-user.usecase';

const getUserFactory = (userRepo: UserRepository) =>
  new GetUserUseCase(userRepo);

export const getUserUseCaseProvider = {
  provide: GetUserUseCase,
  useFactory: getUserFactory,
  deps: [UserRepository],
};
