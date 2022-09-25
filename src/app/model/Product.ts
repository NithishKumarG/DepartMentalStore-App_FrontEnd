 export class Product{
    id:number;
    name:String;
    cost:number;
    stock:number;
    description:string;
    image:string;
    value:number=1;
    constructor(id:number,name:string,cost:number,stock:number,description:string,imagesrc:string){
      this.id=id;
      this.name=name;
      this.cost=cost;
      this.stock=stock;
      this.description=description;
      this.image=imagesrc;
      this.value=1;
    }
 }