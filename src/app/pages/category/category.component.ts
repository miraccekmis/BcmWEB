import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[];
  currentCategory :Category;
  constructor(private categoryService:CategoryService, private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCategoriesByBrand(params["id"])
      }else{
        this.getCategories()
      }
    })
}

  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
      console.log("getCategories");
      console.log(this.categories);
    })   
    
  }

  getCategoriesByBrand(id:number) {
    this.categoryService.getCategoriesByBrand(id).subscribe(response=>{
      this.categories = response.data
      console.log("getCategoriesByBrand");
      console.log(this.categories);
      
    })   
  }
  setCurrentCategory(category:Category){
    this.currentCategory = category;
  }

}
