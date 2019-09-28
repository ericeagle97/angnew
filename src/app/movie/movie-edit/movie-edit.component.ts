import { MovieService } from './../movie.service';
import { Movie } from './../Movie';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  movie: Movie;

  movieName = '';
  boxOffice = 0;
  dateOfLaunch = new Date().toISOString().substring(0, 10);
  genre = 'Superhero';
  active = false;
  hasTeaser = false;
  imageUrl = '';

  editForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieService.getMovies().forEach((f: Movie) => {
        console.log("inside")
        if (f.id.toString() === params.get('id')) {
          this.movie = f;
          this.editForm = this.formBuilder.group({
            'movieName': new FormControl(this.movie.title, [Validators.required, Validators.maxLength(200)]),
            'imageUrl': new FormControl(this.movie.imageUrl, [Validators.required]),
            'boxOffice': new FormControl(this.movie.boxOffice, [Validators.required, Validators.pattern("^[0-9]*$"),
            ]),
            'dateOfLaunch': new FormControl(this.movie.dateOfLaunch.toISOString().substring(0, 10), [Validators.required]),
            'genre': new FormControl(this.movie.genre, [Validators.required]),
            'active': new FormControl(this.movie.active, [Validators.required,]),
            'hasTeaser': new FormControl(this.movie.hasTeaser),
          });
        }
      });
    });

  }

  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.invalid) {
      return;
    }

    console.log(this.editForm.value)

    let movieUpdated: Movie = {
      id: this.movie.id,
      title: this.editForm.value['movieName'],
      boxOffice: this.editForm.value['boxOffice'],
      dateOfLaunch: new Date(this.editForm.value['dateOfLaunch']),
      genre: this.editForm.value['genre'],
      active: (this.editForm.value['active'] === "true"),
      hasTeaser: this.editForm.value['hasTeaser'],
      imageUrl: this.editForm.value['imageUrl']
    };

    console.log("new movie: " + movieUpdated.genre)

    this.movieService.updateMovie(movieUpdated)
    this.router.navigate(['']);
    console.log(this.editForm.value)
  }

}
