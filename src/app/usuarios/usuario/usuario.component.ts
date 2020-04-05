import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.reducers";
import { ActivatedRoute } from "@angular/router";
import { cargarUsuario } from "src/app/store/actions";
import { Usuario } from "src/app/models/usuario.model";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuario.component.html",
  styleUrls: ["./usuario.component.css"]
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario;
  error: any;
  loading = false;
  loaded = false;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.store
      .select("usuario")
      .subscribe(({ user, loading, error, loaded }) => {
        this.usuario = user;
        this.loading = loading;
        this.error = error;
        this.loaded = loaded;
      });

    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }));
    });
  }
}
