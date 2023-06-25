import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/models/joke.model';
import { JokeService } from 'src/services/joke.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrls: ['./facts.component.scss']
})
export class FactsComponent implements OnInit {
  joke!: any;

  constructor(private jokeService: JokeService) { }
  private getAJoke() {
    this.jokeService.getJoke()
        .subscribe(response => {
          this.joke = response;
        });
  }
  ngOnInit(): void {
    this.getAJoke();
  }

  getNewJoke() {
    this.getAJoke();
  }
}
