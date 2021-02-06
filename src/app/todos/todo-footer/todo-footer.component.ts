import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import * as actionsTodo from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'Todos';
  filtros: actions.filtrosValidos[] = ['Todos', 'Completados', 'Pendientes'];

  pendientes: number = 0;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {
    // this.store.select('filtro')
    //   .subscribe( filtro => this.filtroActual = filtro);

    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes =
        state.todos.filter( todo => !todo.completado ).length;
    });

  }

  cambiarFiltro( filtro: actions.filtrosValidos ) {
    this.store.dispatch( actions.setFiltro({ filtro }) );
  }

  limpiarComp(){
    this.store.dispatch( actionsTodo.limpiarCompletados() );
  }

}
