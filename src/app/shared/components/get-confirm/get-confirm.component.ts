import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

  constructor(

    private _diaRef : MatDialogRef<GetConfirmComponent>

  ) { }

  ngOnInit(): void {
  }

  onRemove(){
  
   this._diaRef.close(true);

  }

  onClose(){

     this._diaRef.close(false);
  }

}
