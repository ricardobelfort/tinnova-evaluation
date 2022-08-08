import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Usuario } from './../model/usuario';
import { UsuariosService } from './usuarios.service';

@Injectable({
  providedIn: 'root',
})
export class UsuarioResolverService implements Resolve<Usuario> {
  constructor(private usuarioService: UsuariosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Usuario | Observable<Usuario> {
    if (route.params && route.params['id']) {
      return this.usuarioService.getById(route.params['id']);
    }

    return of({
      id: null,
      name: null,
      email: null,
      cpf: null,
      phone: null,
    });
  }
}
