import { Observable } from 'rxjs';
import { IUseCase } from '../../base/use-case';
import { IUser } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@angular/core';

@Injectable() //It can be when I don't need useFactory
export class GetUserUseCase implements IUseCase<string, IUser> {
  constructor(private userRepository: UserRepository) {}

  execute(nick: string): Observable<IUser> {
    return this.userRepository.getUser(nick);
  }
}
