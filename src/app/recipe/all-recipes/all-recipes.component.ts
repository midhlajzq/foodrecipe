import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  searchKey:string=''
  allrecipes:any=[]
   constructor(private api:ApiService){

   }
   ngOnInit(): void {
       this.api.getallrecipe().subscribe(
        (result:any)=>{
          console.log(result);
          this.allrecipes=result
          
        }
       )
        // to get search from api service
      this.api.searchTerm.subscribe(
        (result:any)=>{
        this.searchKey=result
        console.log(this.searchKey);
        
        }
      )
   }
}
