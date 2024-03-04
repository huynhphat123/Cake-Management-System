import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-bill-products',
  templateUrl: './view-bill-products.component.html',
  styleUrls: ['./view-bill-products.component.scss']
})
export class ViewBillProductsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'total'];
  dataSource: any;
  data: any;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialogRef: MatDialogRef<ViewBillProductsComponent>) { }

  ngOnInit() {
    if (this.dialogData && this.dialogData.productDetail) {
      try {
        this.dataSource = JSON.parse(this.dialogData.productDetail);
        console.log(this.dialogData.productDetail);
      } catch (error) {
        console.error('Invalid JSON:', error);
      }
    } else {
      console.error('Missing data:', this.dialogData);
    }
  }
}