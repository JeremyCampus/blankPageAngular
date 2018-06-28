import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../services/appareil.service'

@Component({
  selector: 'app-deuxieme-page',
  templateUrl: './deuxieme-page.component.html',
  styleUrls: ['./deuxieme-page.component.scss']
})
export class DeuxiemePageComponent implements OnInit {

  isAuth = false;

 appareils: any[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService: AppareilService) {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 2000
      );
    }

    ngOnInit(){
      this.appareils = this.appareilService.appareils;
    }


  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  }

}
