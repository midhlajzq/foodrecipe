import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
  recipeid:string=''
  recipe:any={}
  constructor(private viewActivatedRoute:ActivatedRoute,private api:ApiService){}
  ngOnInit(): void {
    // to get path parameter from route
    this.viewActivatedRoute.params.subscribe
    (
      (data:any)=>{
        this.recipeid=data.id
      }
    )
      // call viewrecipe
      this.api.viewrecipe(this.recipeid).subscribe(
        (result:any)=>{
          console.log(result);
          this.recipe=result
          
          
        }
      )
  }
  // addtofavourite
  addfavourite(){
    const{id,name,ingredients,directions,image}=this.recipe
    this.api.addfavourite(id,name,ingredients,directions,image).subscribe(
      (result:any)=>{
        alert(result)
      },
      (result:any)=>{
        alert(result.error)
      }
    )
  }

}
