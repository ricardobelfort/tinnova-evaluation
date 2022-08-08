import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs/operators';

import { Usuario } from './../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private API = 'https://private-9d65b3-tinnova.apiary-mock.com/users';

  constructor(private httpClient: HttpClient) {}

  listAll() {
    return this.httpClient.get<Usuario[]>(this.API).pipe(first(), delay(5000));
  }
}
