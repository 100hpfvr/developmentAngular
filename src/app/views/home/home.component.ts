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





}
