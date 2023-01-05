import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public estalogeado : boolean = true;

  constructor(private autservice: AuthService){}

  title = 'Biodigestores';

  ngOnInit(): void{    
    if (this.autservice.isLoggedin() == true){
      this.estalogeado = false;
    }else{
      this.estalogeado = true;
    } 
  }

}
