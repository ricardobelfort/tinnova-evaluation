import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  home() {
    this.router.navigate(['']);
  }
  addNew() {
    this.router.navigate(['usuarios/novo']);
  }
}
