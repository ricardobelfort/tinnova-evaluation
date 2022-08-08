import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

import { Usuario } from './../model/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent implements OnInit {
  form: FormGroup;
  usuarios: Usuario[] = [];
  usuario: Usuario | undefined;

  isUpdate: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar,
    private usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute
  ) {
    const usuario = this.activatedRoute.snapshot.data['usuario'];
    console.log(usuario);
    this.isUpdate = usuario.id ? true : false;

    this.form = this.fb.group({
      id: [usuario.id],
      name: [usuario.name, [Validators.required, Validators.minLength(3)]],
      email: [usuario.email, [Validators.required, Validators.email]],
      cpf: [usuario.cpf],
      phone: [usuario.phone],
    });
  }

  ngOnInit(): void {
    console.log(this.isUpdate);
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.form.value.id) {
        this.usuarioService.update(this.form.value).subscribe(
          (res) => {
            this._snackBar.open('Usuário alterado com sucesso!', '', {
              duration: 4000,
            });
          },
          (error) => {
            this._snackBar.open('Erro ao alterar usuário', '', {
              duration: 4000,
            });
          }
        );
        this.router.navigate(['']);
      } else {
        this.usuarioService.save(this.form.value).subscribe(
          (res) => {
            this._snackBar.open('Usuário salvo com sucesso!', '', {
              duration: 4000,
            });
          },
          (error) => {
            this._snackBar.open('Erro ao salvar usuário', '', {
              duration: 4000,
            });
          }
        );
        this.form.reset();
        this.router.navigate(['']);
      }
    }
  }
}
