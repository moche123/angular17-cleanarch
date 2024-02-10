import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser, IUserDTO } from '../../../domain/models/user.model';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { UserApiMapper } from './mappers/user-api.mapper';
import { IUserApi } from './entities/user-api.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class UserImplementationRepository extends UserRepository {
  userMapper = new UserApiMapper();

  constructor(private http: HttpClient) {
    super();
  }

  override getUser(nick: string): Observable<IUser> {
    return this.http
      .get<IUserApi>(`${environment.urlApiGithub}/${nick}`)
      .pipe(map(this.userMapper.mapFrom));
  }
  override addUser(user: IUserDTO): Observable<IUser[]> {
    return this.http
      .post<IUserApi>(`${environment.urlApiGithubPost}`, { user })
      .pipe(
        map(() => [
          {
            login: '',
            id: 1,
            node_id: '',
            avatar_url: '',
            name: '',
            company: '',
            location: '',
          },
        ])
      );
  }
}
