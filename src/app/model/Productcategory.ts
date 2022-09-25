import { productsubcategory } from "./productsubcategory";

export class Productcategory{
    id:number;
    categoryname:String;
    src:String;
    subcateegoryname:productsubcategory[];
    constructor(id:number,name:String,subcat:productsubcategory[],src:String){
        this.id=id;
        this.categoryname=name;
        this.subcateegoryname=subcat;
        this.src=src;
    }
    
}