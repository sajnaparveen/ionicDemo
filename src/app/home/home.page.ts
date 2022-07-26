import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../services/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  productForm : any;

  showAddForm: any;

  showProductsList : any;

  productList : any;

  showUpdateForm : any;

  constructor(private formGroup: FormBuilder, private service:HttpserviceService) {}

  ngOnInit(): void {

    this.productForm = new FormGroup({
      name : new FormControl(''),
      price : new FormControl(''),
      quantity : new FormControl('')
    })
  }

  showForm(){

    this.showAddForm=true;
    this.showProductsList=false;

  }

  showGrid(){
    this.showProductsList=true;
    this.showAddForm=false
    this.service.getProducts().subscribe({
      next : (data) =>{
        console.log("getProducts", data.result)
        this.productList = data.result
      }
    })
  }

  onSubmit(){
    console.log("formValue",this.productForm.value)
    this.service.addProduct(this.productForm.value).subscribe({
      next: (data)=>{
        console.log("data", data)
      },
      error : (err)=>{
        console.log("Error", err)
      }
    })

  }

  // getProducts(){
  //   this.service.getProducts().subscribe({
  //     next : (data) =>{
  //       console.log("getProducts", data)
  //     }
  //   })
  // }

  ShowUpdateForm(i : any){

    this.showUpdateForm=true
    this.showProductsList=false;
     console.log("index", i)
  }

}
