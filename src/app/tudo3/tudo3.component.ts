import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itudo } from '../shared/model/tudo';

@Component({
  selector: 'app-tudo3',
  templateUrl: './tudo3.component.html',
  styleUrls: ['./tudo3.component.scss']
})
export class Tudo3Component {

  isEditMode: boolean = false;

@ViewChild('tudoInput') tudoInput! : ElementRef;

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
      tudoItem: "apple",
      tudoId: "1234",
    },

    {

      tudoItem: "banana",
      tudoId: "12345"
    },

    {

      tudoItem: "strawberry",
      tudoId: "123456"
    }
  ];


  onAddTudo(){

      if(this.tudoInput.nativeElement.value){

          let tudoObj = {

             tudoItem : this.tudoInput.nativeElement.value,
             tudoId : this.uuid()
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

  onEditedTudo(){

      let update_id = localStorage.getItem("edit_id");

      if(update_id){

          let upadte_obj = {

              tudoItem : this.tudoInput.nativeElement.value,
              tudoId : update_id
          }

          let update_ind = this.tudoArr.findIndex(tudo => tudo.tudoId === update_id);

          this.tudoArr[update_ind] = upadte_obj;
          
          this.isEditMode = false;

          this.tudoInput.nativeElement.value = "";  
      }
  }

  trackById(index : number , tudo : Itudo) : string{

      return tudo.tudoId;
  }

}
