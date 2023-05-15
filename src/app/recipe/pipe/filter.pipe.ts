import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(recipe:any[],searchTerm:string,propertyName:string): any[] {
    const result:any=[]
    if(!recipe|| searchTerm==""||propertyName==""){
      return recipe
    }
    recipe.forEach((item:any)=>{
     if(item[propertyName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
      result.push(item)
     }
    })
    return result;
  }

}
