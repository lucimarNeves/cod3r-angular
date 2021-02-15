import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtc-update',
  templateUrl: './produtc-update.component.html',
  styleUrls: ['./produtc-update.component.css']
})
export class ProdutcUpdateComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe( product =>{
      this.product = product
    });
  }

  updateProduct(): void {
     this.productService.update(this.product).subscribe(() =>{
       this.productService.showMessage("Produto alterado com sucesso!")
       this.router.navigate(['/products']);
     });
  }

  cancel(): void {
     this.router.navigate(['/products']);
  }
}
