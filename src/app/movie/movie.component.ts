import { Component, ElementRef, ViewChild } from '@angular/core';
import { IMovie } from '../shared/model/movie';
import { movies } from '../shared/const/movie';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  constructor(

    private _snackBar: MatSnackBar
  ) { }

  @ViewChild('name') name!: ElementRef
  @ViewChild('image') image!: ElementRef
  @ViewChild('desc') desc!: ElementRef
  @ViewChild('rating') rating!: ElementRef

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

  isEditmode: boolean = false;

  Edit_id: string = "";

  movieArr: Array<IMovie> = movies

  setbadge(rating: number) {

    if (rating > 7) {

      return "badge-success";
    }
    else if (rating > 5 && rating <= 7) {

      return "badge-warning";
    }
    else {

      return "badge-danger";
    }
  }

  onMovieAdd() {

    if (this.name.nativeElement.value) {

      let mObj: IMovie = {

        id: this.uuid(),
        title: this.name.nativeElement.value,
        year: 2019,
        rating: this.rating.nativeElement.value,
        poster: this.image.nativeElement.value,
        overview: this.desc.nativeElement.value

      }

      this.movieArr.unshift(mObj);

      this.name.nativeElement.value = "";
      this.image.nativeElement.value = "";
      this.desc.nativeElement.value = "";
      this.rating.nativeElement.value = "";

      this._snackBar.open("movie added successfully", "Close", {

        horizontalPosition: "left",
        verticalPosition: "top",
        duration: 3000
      })

    }

  }


  onMovieRemove(id: string) {

    this.movieArr = this.movieArr.filter(m => m.id !== id);

    this._snackBar.open("movie removed successfully", "Close", {

      horizontalPosition: "left",
      verticalPosition: "top",
      duration: 3000
    })

  }

  onMovieEdit(m: IMovie) {

    this.name.nativeElement.value = m.title;
    this.image.nativeElement.value = m.poster;
    this.rating.nativeElement.value = m.rating;
    this.desc.nativeElement.value = m.overview;

    this.isEditmode = true;

    this.Edit_id = m.id;
  }

  onMovieUpdate() {

    let mObj: IMovie = {

      id: this.Edit_id,
      title: this.name.nativeElement.value,
      year: 2019,
      rating: this.rating.nativeElement.value,
      poster: this.image.nativeElement.value,
      overview: this.desc.nativeElement.value

    }

    let m_ind = this.movieArr.findIndex(m => m.id === mObj.id);

    this.movieArr[m_ind] = mObj;

    this.name.nativeElement.value = "";
    this.image.nativeElement.value = "";
    this.desc.nativeElement.value = "";
    this.rating.nativeElement.value = "";

    this.isEditmode = false;
    this.Edit_id = "";

    this._snackBar.open("movie Updated successfully", "Close", {

      horizontalPosition: "left",
      verticalPosition: "top",
      duration: 3000
    })

  }

  trackById(index: number, movie: IMovie) {

    return movie.id;
  }

}
