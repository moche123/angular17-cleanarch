import { Observable } from 'rxjs';
import { IUseCase } from '../../base/use-case';
import { IUser, IUserDTO } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

export class AddUserUseCase implements IUseCase<IUserDTO, IUser[]> {
  constructor(private userRepository: UserRepository) {}

  execute(nick: IUserDTO): Observable<IUser[]> {
    return this.userRepository.addUser(nick);
  }
}
