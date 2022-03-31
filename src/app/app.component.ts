import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  titulo : string = 'IFSP - São Carlos';
  mensagem : string = "Seja bem vindo a disciplina de TC2";
  desenvolvedor : string = "Willian";
}
