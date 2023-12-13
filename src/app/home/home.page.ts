import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  coche: any;
  filtro: String=""

  constructor(private httpClient:HttpClient) {
    this.coche = this.httpClient.get('https://randomuser.me/api/?results=20')
  }
}
