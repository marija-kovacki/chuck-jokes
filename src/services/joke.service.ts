import {Injectable} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { endpoint } from "src/environments/endpoint";
import { map, Observable } from "rxjs";
import { Joke } from "src/models/joke.model";


@Injectable({
  providedIn: "root",
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getJoke() {
    return this.http.get(endpoint.randomJoke);
  }

}
