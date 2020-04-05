import { Actions, ofType, createEffect } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { UsuariosService } from "src/app/services/usuarios.service";
import * as usuariosActions from "../actions";
import { tap, mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class UsuariosEffects {
  constructor(
    private usuariosService: UsuariosService,
    private actions$: Actions
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(() =>
        this.usuariosService.getUsers().pipe(
          map(users =>
            usuariosActions.cargarUsuariosSuccess({ usuarios: users })
          ),
          catchError(err =>
            of(usuariosActions.cargarUsuariosError({ payload: err }))
          )
        )
      )
    )
  );
}
