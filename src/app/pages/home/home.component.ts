import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ListMovieComponent} from "../../components/list-movie/list-movie.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MatButton, ListMovieComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
}
