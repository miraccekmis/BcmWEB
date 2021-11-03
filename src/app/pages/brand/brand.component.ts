import { BrandService } from './../../services/brand.service';
import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  currentBrand :Brand;
  
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
    }
  getBrands(){
   this.brandService.getBrands().subscribe(response=>{
     this.brands=response.data
     console.log(response);
   })
   
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

}
