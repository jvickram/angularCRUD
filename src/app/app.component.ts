import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCoffeeApp';

  constructor(private snackBar: MatSnackBar){

  }

  ngOnInit(){
    if ((navigator as any).standalone==false){
      // This is an Ios device and we are in the browser
    this.snackBar.open("You can add this PWA to the Home Screen", "", {duration:3000});
    }
    if ((navigator as any).standalone==undefined){
      // For others
    if (window.matchMedia("(display-mode: browser").matches){
      //We are in the browser
      //Web app Banner
      window.addEventListener("beforeinstallpromt", event => {
        // Aborts the banner
        event.preventDefault();
        const sb = this.snackBar.open("Do you want to install this app?", "Install", {duration:5000});
        sb.onAction().subscribe( () => {
          (event as any).prompt();
          (event as any).userChoice.then( result => {
            if(result.outcome == "dismissed"){
              // TODO: no installation
            } else {
              // TODO: It was installed
            }
          })
        })
        return false;
      })
    }
    }
  }
}
