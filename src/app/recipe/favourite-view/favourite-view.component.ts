import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-favourite-view',
  templateUrl: './favourite-view.component.html',
  styleUrls: ['./favourite-view.component.css']
})
export class FavouriteViewComponent implements OnInit {
  recipeid:string=''
  recipe:any=[]
  constructor (private favouriteActivatedRoute:ActivatedRoute,private api:ApiService){}

  ngOnInit(): void {
    // to get path parameter from route
    this.favouriteActivatedRoute.params.subscribe
    (
      (data:any)=>{
        this.recipeid=data.id
      }
    )
    this.api.favouriteview(this.recipeid).subscribe(
      (result:any)=>{
        console.log(result);
        this.recipe=result
        
        
      }
    )
}
}
