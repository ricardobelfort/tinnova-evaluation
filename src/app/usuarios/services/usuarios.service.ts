import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Usuario } from './../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private readonly API = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Usuario[]>(`${this.API}usuarios`).pipe(first());
  }

  save(usuario: Usuario) {
    return this.httpClient.post<Usuario>(`${this.API}usuarios`, usuario);
  }

  getById(id: number) {
    return this.httpClient.get<Usuario>(`${this.API}usuarios/${id}`);
  }

  update(usuario: Usuario) {
    return this.httpClient.put<Usuario>(
      `${this.API}usuarios/${usuario.id}`,
      usuario
    );
  }

  delete(usuario: Usuario) {
    return this.httpClient.delete(`${this.API}usuarios/${usuario.id}`);
  }
}
