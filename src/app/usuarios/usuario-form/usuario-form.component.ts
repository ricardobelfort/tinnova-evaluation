import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})
export class UsuarioFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null],
      email: [null, [Validators.required, Validators.email]],
      cpf: [null],
      phone: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log('cadastrei...');
  }
}
