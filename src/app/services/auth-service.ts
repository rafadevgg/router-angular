import { inject, Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient)
  private usuarioSessao: User | undefined;

  autenticar(usuarioLogin: User) {
    this.http.post<User>('http://localhost:8080/login', usuarioLogin).subscribe(
      response => {
        this.usuarioSessao = response;
        localStorage.setItem("sessao", JSON.stringify(this.usuarioSessao));
      }
    )
  }

  getUsuarioSessao() {
    if (this.usuarioSessao) {
      return this.usuarioSessao;
    }
    const usuarioStorage = localStorage.getItem('sessao');
    if (usuarioStorage) {
      this.usuarioSessao = JSON.parse(usuarioStorage);
    }
    return this.usuarioSessao;
  }

}
