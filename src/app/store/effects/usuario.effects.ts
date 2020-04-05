import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { UsuariosService } from "src/app/services/usuarios.service";
import * as usuariosActions from "../actions";
import { tap, mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class UsuarioEffects {
  constructor(
    private usuariosService: UsuariosService,
    private actions$: Actions
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),
      mergeMap(action =>
        this.usuariosService.getUserById(action.id).pipe(
          map(user => usuariosActions.cargarUsuarioSuccess({ usuario: user })),
          catchError(err =>
            of(usuariosActions.cargarUsuarioError({ payload: err }))
          )
        )
      )
    )
  );
}
