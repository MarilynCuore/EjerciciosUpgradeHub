import {trigger, style, animate, query, stagger, transition} from '@angular/animations';

export const loadingAnimation = trigger('loading',[
    transition('* => *',[
        query(':enter', [
            style({opacity:0}),
            stagger(100,[
                animate('350ms',style({opacity:1}))
            ])
        ],{optional:true}) 
    ]) 
])