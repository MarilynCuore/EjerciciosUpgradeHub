import {trigger, style, animate, query, stagger, transition} from '@angular/animations';

export const loadingAnimation = function(){
    return trigger('loading',[
        transition('* => *',[
            query(':enter', [
                style({opacity:0}),
                stagger(100,[

                ])
            ],{optional:true}) 
        ]) 
    ])
}