import { Observable } from 'rxjs';
import { IUser, IUserDTO } from '../models/user.model';

export abstract class UserRepository {
  abstract getUser(nick: string): Observable<IUser>;
  abstract addUser(user: IUserDTO): Observable<IUser[]>;
}
