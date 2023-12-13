import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  coches: any;
  filtro: String=""

  constructor(private httpClient:HttpClient) {
    this.coches = this.httpClient.get('https://raw.githubusercontent.com/jmhr0/HLC_1.14__cochesResponsive/master/coches.json')
  }
}
