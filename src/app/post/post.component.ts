import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;


  constructor() {
    this.postTitle = "";
    this.postContent = "";
    this.postLoveIts = 0;
    this.postCreatedAt = new Date();
   }

  ngOnInit(): void {
  }

  onLiker() {
    console.log("Like !");
    this.postLoveIts++;
  }

  onDisliker() {
    console.log("Dislike !");
    this.postLoveIts--;
  }

  getColor() {
    if (this.postLoveIts > 0) {
      return 'green';
    } else if (this.postLoveIts < 0) {
      return 'red'
    } else {
      return 'grey';
    }
  }

}
