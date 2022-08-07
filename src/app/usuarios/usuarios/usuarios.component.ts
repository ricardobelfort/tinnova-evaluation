import { Component, OnInit } from '@angular/core';

import { Usuario } from './../model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [
    {
      id: 1,
      name: 'Joao da Silva',
      cpf: '6899337649',
      phone: '4233335555',
      email: 'joao@joaosilva.com.br',
    },
    {
      id: 2,
      name: 'Maria Antonieta',
      cpf: '65138896180',
      phone: '1255553333',
      email: 'maria@mariaantonieta.com.br',
    },
    {
      id: 3,
      name: 'Luiz Souza',
      cpf: '32420496329',
      phone: '1144446666',
      email: 'luiz@luizsouza.com.br',
    },
  ];
  displayedColumns = ['id', 'name', 'cpf', 'phone', 'email'];

  constructor() {}

  ngOnInit(): void {}
}
