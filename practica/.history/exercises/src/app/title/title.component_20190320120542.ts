import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: 'title.component.html',
    styleUrls: ['title.component.scss'],
       
})

 export class TitleComponent implements OnInit{
     public name: string = "Marilyn";
     public edad: number ;
     public isAvailable: boolean = true;
     public css_clases: string[] = ['active','shadow']; 

    constructor(){}

    ngOnInit(){
        this.name = 'Marilyn';
        this.edad = 25;

        setTimeout(()=> this.name = 'Hola', 3000)
        setTimeout(()=> this.isAvailable = false, 3000)
    }
     getEdadNombre(): string{
         return `${this.name} : ${this.edad}`; 
          
     }
 }
