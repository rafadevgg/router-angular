import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../shared/models/User';
import { UserService } from '../../services/user-service';
import { CardUser } from '../../components/card-user/card-user';

@Component({
  selector: 'app-lista-users',
  imports: [CardUser],
  templateUrl: './lista-users.html',
  styleUrl: './lista-users.scss',
})
export class ListaUsers implements OnInit {

  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.buscarUsers().subscribe(
      response => this.users = response
    );
  }

  protected users: User[] = [];

}
