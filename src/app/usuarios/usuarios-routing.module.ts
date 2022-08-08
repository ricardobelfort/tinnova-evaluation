import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioResolverService } from './services/usuario-resolver.service';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
  },
  {
    path: 'novo',
    component: UsuarioFormComponent,
    resolve: {
      usuario: UsuarioResolverService,
    },
  },
  {
    path: 'alterar/:id',
    component: UsuarioFormComponent,
    resolve: {
      usuario: UsuarioResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
