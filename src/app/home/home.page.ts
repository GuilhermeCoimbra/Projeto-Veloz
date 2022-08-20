import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: any;

  constructor(public navCtrl: NavController,private http: HttpClient) {
    this.list()}
    list(){
      let lista: Observable <any>;
      lista = this.http.get('http://petstore-demo-endpoint.execute-api.com/petstore/pets');
      lista.subscribe(l=>{
        this.items= l;
      })
     }
     key: string = 'id';
     reverse:boolean = false;
     sort(key){
      this.key = key;
      this.reverse =this.reverse;
     }
}