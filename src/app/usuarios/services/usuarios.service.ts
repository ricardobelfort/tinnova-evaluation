import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Usuario } from './../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private readonly API = 'https://private-9d65b3-tinnova.apiary-mock.com/users';

  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Usuario[]>(this.API).pipe(first());
  }
}
