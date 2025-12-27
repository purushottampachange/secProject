import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../shared/model/student';
import { students } from '../shared/const/student';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../shared/components/get-confirm/get-confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  constructor(

    private _matDialog: MatDialog,
    private _snackbar: MatSnackBar

  ) { }

  @ViewChild('fname') fname!: ElementRef;
  @ViewChild('lname') lname!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;


  uuid = () => {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      character => {
        const random = (Math.random() * 16) | 0
        const value = character === 'x' ? random : (random & 0x3) | 0x8
        return value.toString(16)
      }
    )
  }

  isEditMode: boolean = false;

  stdArr: Array<Istudent> = students

  Edit_id: string = "";

  onAddStd() {

    if (this.fname.nativeElement.value) {

      let stdObj: Istudent = {

        fname: this.fname.nativeElement.value,
        lname: this.lname.nativeElement.value,
        email: this.email.nativeElement.value,
        contact: this.contact.nativeElement.value,
        id: this.uuid()
      }

      this.stdArr.push(stdObj);

      this.fname.nativeElement.value = "";
      this.lname.nativeElement.value = "";
      this.email.nativeElement.value = "";
      this.contact.nativeElement.value = "";

      this._snackbar.open('Student Added Successfully', 'Close', {

        horizontalPosition: 'left',
        verticalPosition: 'top',
        duration: 3000
      })
    }

  }

  onStdEdit(std: Istudent) {

    this.fname.nativeElement.value = std.fname;
    this.lname.nativeElement.value = std.lname;
    this.email.nativeElement.value = std.email;
    this.contact.nativeElement.value = std.contact;

    this.Edit_id = std.id

    this.isEditMode = true;
  }

  onUpdateStd() {

    let update_obj: Istudent = {

      fname: this.fname.nativeElement.value,
      lname: this.lname.nativeElement.value,
      email: this.email.nativeElement.value,
      contact: this.contact.nativeElement.value,
      id: this.Edit_id

    }

    let update_ind = this.stdArr.findIndex(std => std.id === update_obj.id);

    this.stdArr[update_ind] = update_obj;

    this.Edit_id = "";
    this.isEditMode = false;

    this.fname.nativeElement.value = "";
    this.lname.nativeElement.value = "";
    this.email.nativeElement.value = "";
    this.contact.nativeElement.value = "";

    this._snackbar.open('Student Updated Successfully', 'Close', {

      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })

  }

  onRemove(id: string) {

    let diaConfig: MatDialogConfig = {

      disableClose: true
    }

    let dialog = this._matDialog.open(GetConfirmComponent, diaConfig)

    dialog.afterClosed().subscribe((result: boolean) => {

      if (result) {

        this.stdArr = this.stdArr.filter(std => std.id !== id);

        this._snackbar.open('Student Removed Successfully', 'Close', {

          horizontalPosition: 'left',
          verticalPosition: 'top',
          duration: 3000
        })

      }
    })

  }

  trackBy(index: number, std: Istudent) {

    return std.id;
  }

}
