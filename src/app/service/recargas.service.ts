import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecargasService {

  constructor(private http: HttpClient) {}

  getSaldoPorDNI(dni: string): Observable<any> {
    //const url = `${environment.WS_PATH}/recargas/recarga/${dni}`;
    let url = environment.WS_PATH + "/recargas/recarga/" + dni;
    return this.http.get<any>(url);
  }
  getClientes(){
    let url = environment.WS_PATH + "/recargas/list"
    console.log("URL del servicio web:", url);
    return this.http.get<any>(url)
  }
}
