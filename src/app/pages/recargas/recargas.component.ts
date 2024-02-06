import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecargasService } from 'src/app/service/recargas.service';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.scss']
})
export class RecargasComponent {

  numero: string = '';
  recarga: any = null;
  constructor(private router: Router, private buscarRecarga: RecargasService) {}
  
  irACliente() {
    this.router.navigate(['paginas/Clientes'], { replaceUrl: true });
  }
  irARecargas() {
    this.router.navigate(['paginas/Recargas'], { replaceUrl: true });
  }

  obtenerRecarga(): void {
    this.buscarRecarga.getSaldoPorDNI(this.numero).subscribe((result: any) => {
      this.recarga = result;
    }, (error) => {
      console.error('Error al buscar cliente:', error);
    });
  }
}
