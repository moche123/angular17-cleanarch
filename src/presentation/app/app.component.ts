import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
// import { getUserUseCaseProvider } from '../../data/providers-export';
import { GetUserUseCase } from '../../domain/use-cases/get-user.usecase';
import { IUser } from '../../domain/models/user.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserRepository } from '../../domain/repositories/user.repository';
import { UserImplementationRepository } from '../../data/repositories/user/user-implementation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, CommonModule],
  providers: [
    // getUserUseCaseProvider, //{provide: GetUserUseCase,useFactory: getUserFactory,deps: [UserRepository],};
    { provide: UserRepository, useClass: UserImplementationRepository },
    GetUserUseCase, //, If I don't need useFactory
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  user$: Observable<IUser> = new Observable<IUser>();

  constructor(private getUserUseCase: GetUserUseCase) {}
  ngOnInit(): void {
    this.user$ = this.getUserUseCase.execute('moche123');
  }
}
