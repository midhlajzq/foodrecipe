import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit{
  favourites:any=[]
  searchKey:string=''

  constructor(private api:ApiService){

  }
  ngOnInit(): void {
  
    this.api.getfavourite().subscribe(
      (result:any)=>{
        console.log(result);
        this.favourites=result
        
      },
      (result:any)=>{
        alert(result.error)
      }
    )
    this.api.searchTerm.subscribe(
      (result:any)=>{
      this.searchKey=result
      console.log(this.searchKey);
      
      }
    )
      
  }
// remove item
removeItem(id:any){
  this.api.removefavourite(id).subscribe(
    (result:any)=>{
      this.favourites=result
    },
    (result:any)=>{
      alert(result.error)
    }
  )
}

}
