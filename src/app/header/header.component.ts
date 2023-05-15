import { Component } from '@angular/core';
import { ApiService } from '../recipe/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor (private api:ApiService){}
search(event:any){
  // console.log(event.target.value);
  // to assign new value to bahavier subject use next method
  this.api.searchTerm.next(event.target.value)
  
}

}
