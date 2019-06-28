import {Component} from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
       
})

 export class TitleComponent{
     public name: string = "Marilyn";
     public edad: number ;

     getEdadNombre(): string{
         return `${this.name} : ${this.edad}`;
          
     }
 }
