import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itudo } from '../shared/model/tudo';

@Component({
  selector: 'app-tudo2',
  templateUrl: './tudo2.component.html',
  styleUrls: ['./tudo2.component.scss']
})
export class Tudo2Component {

  isEditMode : boolean = false;

  @ViewChild('tudoInput') tudoInput !: ElementRef;

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
      tudoItem: "car",
      tudoId: "1234",
    },

    {

      tudoItem: "bike",
      tudoId: "12345"
    },

    {

      tudoItem: "bus",
      tudoId: "123456"
    }
  ];


  onAddTudo(){

      if(this.tudoInput.nativeElement.value){

          let tudoObj = {

              tudoItem : this.tudoInput.nativeElement.value,
              tudoId :this.uuid()
          }

          this.tudoArr.push(tudoObj);

          this.tudoInput.nativeElement.value = "";
      }
  }

  onTudoRemove(id : string){

      this.tudoArr = this.tudoArr.filter(tudo => tudo.tudoId !== id);
  }

  onTudoEdit(tudo : Itudo){

      let edit_id = tudo.tudoId;

      localStorage.setItem("edit_id",edit_id);

      this.tudoInput.nativeElement.value = tudo.tudoItem;

      this.isEditMode = true;
  }

  onTudoEdited(){

      let update_id = localStorage.getItem("edit_id");

      if(update_id){

          let update_obj = {

              tudoItem : this.tudoInput.nativeElement.value,
              tudoId : update_id
          }

          let update_ind = this.tudoArr.findIndex(tudo => tudo.tudoId === update_id);

          this.tudoArr[update_ind] = update_obj;

          this.tudoInput.nativeElement.value = "";

          this.isEditMode = false;
      }
  }

  trackByID(index : number , tudo : Itudo){

     return tudo.tudoId
  }

}
