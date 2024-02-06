import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/domain/cliente';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {
  constructor(private router: Router, private clientesService: ClientesService) {}
  irACliente() {
    this.router.navigate(['paginas/Clientes'], { replaceUrl: true });
  }
  irARecargas() {
    this.router.navigate(['paginas/Recargas'], { replaceUrl: true });
  }
  clientes: any
  client: Cliente = new Cliente()
  dniABuscar: string = '';

  ngOnInit(): void {
      this.clientes = this.clientesService.getClientes()
  }
  obtenerClientes(): void {
    this.clientesService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }
  guardar(){
    this.clientesService.saveCliente(this.client).subscribe(data => {
      console.log(data)
        this.ngOnInit()
    })
  }
  actualizar(){
    this.clientesService.updatePersona(this.client).subscribe(data => {
      console.log(data)
        this.ngOnInit()
    })
  }
  buscar(){
    this.clientesService.updatePersona(this.client).subscribe(data => {
      console.log(data)
        this.ngOnInit()
    })
  }
  eliminarPersona(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta persona?')) {
      this.clientesService.dropCliente(id).subscribe(data => {
        console.log(data)
          this.ngOnInit()
      })
    }
  }


}
