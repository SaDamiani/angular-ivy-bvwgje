import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // TS
  public titulo:string = 'Hello World!';
  public nome:string = '';

salvar(){
  console.log('O nome digitado é ' + this.nome );
    }
  }
