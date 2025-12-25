import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itudo } from '../shared/model/tudo';

@Component({
  selector: 'app-tudo',
  templateUrl: './tudo.component.html',
  styleUrls: ['./tudo.component.scss']
})
export class TudoComponent {

  isEditMode: boolean = false;

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

  tudoArr: Array<Itudo> = [
    {
      tudoItem: "HTML",
      tudoId: "1234",
    },

    {

      tudoItem: "CSS",
      tudoId: "12345"
    },

    {

      tudoItem: "JAVASCRIPT",
      tudoId: "123456"
    }
  ];

  @ViewChild('tudoInput') tudoInput !: ElementRef;


  AddTudo() {

    if (this.tudoInput.nativeElement.value) {

      let tudoObj = {

        tudoItem: this.tudoInput.nativeElement.value,
        tudoId: this.uuid()
      }

      this.tudoArr.push(tudoObj);

      this.tudoInput.nativeElement.value = "";
    }

  }

  onTudoRemove(id: string) {

    this.tudoArr = this.tudoArr.filter(tudo => tudo.tudoId !== id);
  }

  onTudoEdit(tudo: Itudo) {

    this.tudoInput.nativeElement.value = tudo.tudoItem;

    let edit_id = tudo.tudoId;

    localStorage.setItem("edit_id", edit_id);

    this.isEditMode = true;

  }

  onTudoSubmit() {

    let update_id = localStorage.getItem("edit_id");

    if (update_id) {

      let update_obj = {

        tudoItem: this.tudoInput.nativeElement.value,
        tudoId: update_id
      }

      let update_ind = this.tudoArr.findIndex(tudo => tudo.tudoId === update_id);

      this.tudoArr[update_ind] = update_obj;

      this.tudoInput.nativeElement.value = "";

      this.isEditMode = false;

    }

  }


  trackByID(index: number, tudo: Itudo): string {

    return tudo.tudoId;
  }

}
