import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategory } from 'src/app/models/subCategory';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  subCategories : SubCategory[]=[];
  currentSubCategory :SubCategory;
  constructor(private subCategoryService:SubCategoryService, private activatedRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getSubCategoriesByCategory(params["id"])
      }else{
        this.getSubCategories()
      }
    })
  }
  
  getSubCategories() {
    this.subCategoryService.getSubCategories().subscribe(response=>{
      this.subCategories= response.data
    })   
    
  }
  getSubCategoriesByCategory(id:number) {
    this.subCategoryService.getSubCategoriesByCategory(id).subscribe(response=>{
      this.subCategories = response.data
      console.log(this.subCategories);
    })   
  }
  setCurrentSubCategory(subCategory:SubCategory){
    this.currentSubCategory = subCategory;
  }

}
