import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
  isHomePage: boolean = true;

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
 
  Listarcitas(){
    this.router.navigate(["listarcitas"]);
  }
  
}

