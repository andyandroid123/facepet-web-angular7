import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-eventos-list',
  templateUrl: './eventos-list.component.html',
  styleUrls: ['./eventos-list.component.css']
})
export class EventosListComponent implements OnInit {

  eventos: Evento[];

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getEventos();
  }

  getEventos(): void {
    this.eventoService.getEventos()
    .subscribe(result => this.eventos = result);
  }
  
  adoptar(id) {
    if (window.confirm('Desea adoptar esta mascota?')) {
      let situacion = 1;
      let usuarioIdAdoptador = 1;
      this.update({id, situacion, usuarioIdAdoptador} as Evento);
    }
  };

  add(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.eventoService.addEvento({ nombre } as Evento)
      .subscribe(hero => {
        this.eventos.push(hero);
      });
  }

  update(evento: Evento): void {
    this.eventoService.updateEvento(evento).subscribe(result => {
      alert("Gracias por adoptar!");
      this.getEventos();
    });
  }

  delete(evento: Evento): void {
    this.eventos = this.eventos.filter(h => h !== evento);
    this.eventoService.deleteEvento(evento).subscribe();
  }

}
