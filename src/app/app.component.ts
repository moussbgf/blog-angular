import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-angular';

  posts = [
    {
      title: 'Mon premier post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis est, posuere a velit placerat, molestie semper enim. Nunc sit amet ultricies nisl, non faucibus massa. Vivamus euismod eros nec lacus vulputate lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu urna metus. Pellentesque porta ullamcorper quam. Donec hendrerit tempus magna, euismod placerat mi luctus sed. ',  
      loveIts: 0,  
      createdAt: new Date()
    },
    {
      title: 'Mon deuxieme post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis est, posuere a velit placerat, molestie semper enim. Nunc sit amet ultricies nisl, non faucibus massa. Vivamus euismod eros nec lacus vulputate lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu urna metus. Pellentesque porta ullamcorper quam. Donec hendrerit tempus magna, euismod placerat mi luctus sed. ',  
      loveIts: 0,  
      createdAt: new Date()
    },
    {
      title: 'Encore un post',  
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis est, posuere a velit placerat, molestie semper enim. Nunc sit amet ultricies nisl, non faucibus massa. Vivamus euismod eros nec lacus vulputate lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean eu urna metus. Pellentesque porta ullamcorper quam. Donec hendrerit tempus magna, euismod placerat mi luctus sed. ',  
      loveIts: 0,  
      createdAt: new Date()
    } 
  ];
}
