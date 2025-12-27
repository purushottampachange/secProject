
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPost } from '../shared/model/postcard';
import { posts } from '../shared/const/postCard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {


  @ViewChild('title') title!: ElementRef;
  @ViewChild('content') content!: ElementRef;
  @ViewChild('userId') userId!: ElementRef;

  isEditMode: boolean = false;

  postArr: Array<IPost> = posts;

  Edit_id: string = "";

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

  constructor(

    private _snackbar: MatSnackBar

  ) { }


  AddPost() {

    if (this.title.nativeElement.value) {

      let postObj: IPost = {

        title: this.title.nativeElement.value,
        body: this.content.nativeElement.value,
        userId: this.userId.nativeElement.value,
        id: this.uuid()

      }

      this.postArr.unshift(postObj);

      this.title.nativeElement.value = "";
      this.content.nativeElement.value = "";
      this.userId.nativeElement.value = "";

      this._snackbar.open('post added successfully', 'Close', {

        horizontalPosition: 'left',
        verticalPosition: 'top',
        duration: 3000
      })

    }

  }

  onPostEdit(post: IPost) {

    this.title.nativeElement.value = post.title;
    this.content.nativeElement.value = post.body;
    this.userId.nativeElement.value = post.userId;

    this.isEditMode = true;

    this.Edit_id = post.id
  }

  onPostUpdate() {

    let update_obj = {

      title: this.title.nativeElement.value,
      body: this.content.nativeElement.value,
      userId: this.userId.nativeElement.value,
      id: this.Edit_id
    }

    let update_ind = this.postArr.findIndex(p => p.id === update_obj.id);

    this.postArr[update_ind] = update_obj;

    this.Edit_id = "";

    this.isEditMode = false;

    this.title.nativeElement.value = "";
    this.content.nativeElement.value = "";
    this.userId.nativeElement.value = "";

    this._snackbar.open('post updated successfully', 'Close', {

      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })

  }

  onPostRemove(id: string) {

    this.postArr = this.postArr.filter(p => p.id !== id);

    this._snackbar.open('post removed successfully', 'Close', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000
    })

  }


  trackById(index: number, post: IPost) {

    return post.id;
  }

}
