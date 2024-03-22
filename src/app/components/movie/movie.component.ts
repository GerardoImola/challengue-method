import {Component, inject, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatChip} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {catchError} from "rxjs";
import {AddMovieFormI} from "../../interfaces/movie/movie.interface";
import {MovieDetailDbResponse} from "../../interfaces/movie/movie-detail-response.interface";
import {SkeletonLoadingComponent} from "../skeleton-loading/skeleton-loading.component";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatCardModule, MatChip, MatIcon, MatTableModule, MatDrawer, MatDrawerContainer, SkeletonLoadingComponent],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  isLoadingResults: boolean = true
  dataSource: MatTableDataSource<AddMovieFormI> = new MatTableDataSource<AddMovieFormI>();
  displayedColumns: string[] = ['Source', 'Value'];
  movieId!: string | number;
  movieData!: MovieDetailDbResponse

  private route = inject(ActivatedRoute)
  private movieService = inject(MovieService)
  private router = inject(Router);


  async ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id') || Number(params.get('id'))
      this.fetchMovieById(this.movieId)
    });
  }

  async fetchMovieById(id: string | number): Promise<void> {
    const uid = 'aSoD7NlQjdQTntwJkX8YsfvXZFg1';

    this.movieService.getMovieById(uid!, id.toString())
      .pipe(
        catchError((error) => {
          console.error('Error al obtener la película', error);
          return [];
        })
      )
      .subscribe((resp) => {
        console.log('resp', resp)

        console.log('Película obtenida exitosamente', resp.data());
        this.movieData = resp.data()
        this.isLoadingResults = false
      });
  }

  onGoBack() {
    this.router.navigate(['/',])

  }
}
