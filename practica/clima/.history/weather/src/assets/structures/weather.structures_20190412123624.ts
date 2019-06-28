export interface Weather{
    name ?: string;
    cod ?: number;
    icon ?: string;
    description ?: string;
    temp ?: number;
    main ?: string;  
}
interface minMaxTemp{
    date? :  number;
    day ?: number; 
    month ?: number;
    min ?: number;
    max ?: number;
}