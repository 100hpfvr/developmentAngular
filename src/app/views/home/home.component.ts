import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Main } from '../../observable';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http : HttpClient ) {}

  ngOnInit(): void {
    (new Main()).main();
  }

  chamada() {
    let resposta =  this.http.get("https://personal-pdge9bfc.outsystemscloud.com/LocadoraDeVeiculo/rest/v1/clientes?pagina=0&qntItems=0"); //chamada da api
    
    // Create observer object
    let myObserver = {
      next: (x: Object) => console.log(x),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => {console.log('Observer got a complete notification')},
  };

    let ob = resposta.subscribe(myObserver);
  }

  resposta(){


  }

}
