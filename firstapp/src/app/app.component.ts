import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksListComponent } from "./books-list/books-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  link ='https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp' ;
}