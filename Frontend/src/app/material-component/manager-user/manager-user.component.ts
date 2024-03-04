import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { error } from 'console';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { SnackbarService } from 'src/services/snackbar.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.scss']
})
export class ManagerUserComponent implements OnInit {

  displayedColumns: string[] = ['name','email','contactNumber','status'];
  dataSource:any;
  responseMessage:any;
  constructor(private ngxService:NgxUiLoaderService,
    private userService:UserService,
    private snackbarService:SnackbarService) { }

  ngOnInit(): void {
    this.ngxService.start();
    this.tableData();
  }

  tableData() {
    this.userService.getUsers().subscribe((resopnse:any)=>{
      this.ngxService.stop();
      this.dataSource = new MatTableDataSource(resopnse);
    },(error:any)=>{
      console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.messag;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }

  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onChange(status:any,id:any) {
    this.ngxService.start();
    var data = {
      status: status.toString(),
      id:id
    }

    this.userService.update(data).subscribe((response:any)=>{
      this.ngxService.stop();
      this.responseMessage = response?.message;
      this.snackbarService.openSnackBar(this.responseMessage,"success");
    },(error:any)=>{
       console.log(error);
      if (error.error?.message) {
        this.responseMessage = error.error?.messag;
      } else {
        this.responseMessage = GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
    })
  }
}
