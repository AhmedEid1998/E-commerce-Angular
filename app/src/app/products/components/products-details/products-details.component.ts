import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any = {}
  loading:boolean = false;
  constructor(private _activatedRoute:ActivatedRoute, private _ProductService:ProductService){
    this.id = _activatedRoute.snapshot.paramMap.get('id')
    // console.log(this.id)
  }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.loading = true;
    this._ProductService.getProductById(this.id).subscribe(response=>{
      this.loading = false;
      this.data = response
      console.log(this.data)
    }, error=>{
      this.loading = false;
    })
  }

}
