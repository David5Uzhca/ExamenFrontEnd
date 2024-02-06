import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Cliente } from '../domain/cliente';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getClientes(){
    let url = environment.WS_PATH + "/clientes/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }

  saveCliente(cliente: Cliente){
    let url = environment.WS_PATH + "/clientes"
    return this.http.post<any>(url, cliente)
  }
  dropCliente(id: number){
    let url = environment.WS_PATH + "/clientes?id=" + id;
    console.log("URL del servicio web para eliminar:", url);
    return this.http.delete<any>(url)
      .pipe(
        catchError(error => {
          console.error("Error al eliminar persona:", error);
          throw error;
        })
      );
  }

  updatePersona(cliente: Cliente){
    let url = environment.WS_PATH + "/clientes"
    return this.http.put<any>(url, cliente)
  }
}
