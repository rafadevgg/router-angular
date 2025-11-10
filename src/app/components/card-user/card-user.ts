import { Component, Input } from '@angular/core';
import { User } from '../../shared/models/User';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-user',
  imports: [RouterLink],
  templateUrl: './card-user.html',
  styleUrl: './card-user.scss',
})
export class CardUser {
  @Input({required:true}) user: User = new User();

}
