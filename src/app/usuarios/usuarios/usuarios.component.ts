import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from './../model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  usuarios$: Observable<Usuario[]>;
  displayedColumns = ['id', 'name', 'cpf', 'phone', 'email', 'actions'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private usuarioService: UsuariosService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.usuarios$ = this.usuarioService.listAll().pipe(
      catchError((error) => {
        this._snackBar.open('Erro ao carregar dados.', '', {
          duration: 4000,
          panelClass: 'danger-snackbar',
        });
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  listAll() {
    this.usuarios$ = this.usuarioService.listAll();
  }

  onEdit(id: number) {
    this.router.navigate(['alterar', id], { relativeTo: this.route });
  }

  onDelete(usuario: Usuario) {
    this.usuarioService.delete(usuario).subscribe(
      (res) => {
        this._snackBar.open('Usuário removido com sucesso!', '', {
          duration: 4000,
        });
        this.listAll();
      },
      (error) => {
        this._snackBar.open('Erro ao remover usuário', '', {
          duration: 4000,
        });
      }
    );
  }
}
