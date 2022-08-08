import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from './../model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  usuarios$: Observable<Usuario[]>;
  displayedColumns = ['name', 'cpf', 'phone', 'email'];

  constructor(private usuarioService: UsuariosService) {
    this.usuarios$ = this.usuarioService.listAll();
  }

  ngOnInit(): void {}
}
