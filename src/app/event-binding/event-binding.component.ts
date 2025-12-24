import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  searchText: string = "";

  onBtnClick(eve: HTMLInputElement): void {

    this.searchText = eve.value

    eve.value = "";
  }

  searchtext1: string = "";

  onSearch(eve: Event): void {

    this.searchtext1 = (eve.target as HTMLInputElement).value
  }

  searchtext2: string = "";

  onSearch2(eve: Event): void {

    let val = (eve.target as HTMLInputElement).value;

    let valRev = val.split("").reverse().join("");

    this.searchtext2 = valRev
  }

  searchtext3: string = "";

  onSearch3(eve: Event) :void {

    let val = (eve.target as HTMLInputElement).value;

    setTimeout(() => {
      this.searchtext3 = val;
    }, 2000);
  }

  searchtext4: string = "";

  onSearch4(eve : HTMLInputElement) : void{

        this.searchtext4 = eve.value
        eve.value = "";
  }

}
