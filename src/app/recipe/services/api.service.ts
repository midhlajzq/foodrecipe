import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchTerm = new BehaviorSubject('')
  BASE_URL = 'https://zqrecipes.onrender.com'

      constructor(private http:HttpClient) { }
      // get all recipe
      getallrecipe(){
        return this.http.get(`${this.BASE_URL}/recipees/all-recipes`)
      }
      // view-recipe
      viewrecipe(id:any){
        return this.http.get(`${this.BASE_URL}/recipees/view-product/${id}`)
      }
      // add-to-favourite
      addfavourite(id:any,name:any,ingredients:any,directions:any,image:any){
        const body ={id,name,ingredients,directions,image}
        // api
        return this.http.post(`${this.BASE_URL}/favourite/add-product`,body)
      }
      // get Favourites
      getfavourite(){
        // api
        return this.http.get(`${this.BASE_URL}/favourite/all-favourite`)
      }
      // favourite view
      favouriteview(id:any){
        return this.http.get(`${this.BASE_URL}/favourite/favourite-view/${id}`)
      }
      // remove favourite
      removefavourite(id:any){
        return this.http.delete(`${this.BASE_URL}/favourite/remove-item/${id}`)
      }
    
}
