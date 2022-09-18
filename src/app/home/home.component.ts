import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  search:String;
  categories = [
    {"id": 1, "name": "Electronics", "src":"../../assets/electronics.jpeg"},
    {"id": 2, "name": "Fashion","src":"../../assets/fashion.jpg"},
    {"id": 3, "name": "Mobiles","src":"../../assets/Mobiles.jpg"},
    {"id": 4, "name": "Beauty","src":"../../assets/amy-shamblen-xwM61TPMlYk-unsplash.jpg"},
    {"id": 5, "name": "Home Appliances","src":"../../assets/appliances.jpg"},
    {"id":6, "name": "Groceries","src":"../../assets/download.jpg"},
    {"id":7, "name":"Laptops","src":"../../assets/laptops.jpg"}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  searchItem(){
    if(this.search.length==0||this.search.length<=2)
      return;
      this.router.navigate(['/products',this.search]);
  }
byCategory(category:any){
  this.router.navigate(['/products', category.name]);
}
}
