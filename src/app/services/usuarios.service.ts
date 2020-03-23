import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  private url = "https://reqres.in/api";

  constructor(private http: HttpClient) {}

  getUsers() {
    let params: HttpParams = new HttpParams().set("per_page", "6");

    return this.http.get(`${this.url}/users`, { params }).pipe(
      map(resp => {
        return resp["data"];
      })
    );
  }
}
