import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "src/app/services/usuarios.service";
import { Usuario } from "src/app/models/usuario.model";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsers().subscribe(users => {
      console.log(users);
      this.usuarios = users;
    });
  }
}
