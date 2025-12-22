import { Component } from "@angular/core";
import { IProduct } from "../shared/model/product";
import { products } from "../shared/const/product";


@Component({

    selector  : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})

export class ProductComponent{

  prodArr : Array<IProduct> = products
  
}