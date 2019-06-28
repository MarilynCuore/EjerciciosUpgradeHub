import {Component} from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
       
})

 export class TitleComponent{
     public name: string = "Marilyn";
     public edad: number ;

     constructor(){
        
    }

    ngOnInit(){
        this.name = 'Marilyn';
        this.edad = 25;
    }
     getEdadNombre(): string{
         return `${this.name} : ${this.edad}`;
          
     }
 }
