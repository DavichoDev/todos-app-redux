import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todo: Todo[], filtro: filtrosValidos): Todo[] {

    switch ( filtro ) {
      case 'Completados':
        // tslint:disable-next-line: no-shadowed-variable
      return todo.filter( (todo) => todo.completado );

      case 'Pendientes':
        // tslint:disable-next-line: no-shadowed-variable
      return todo.filter( (todo) => !todo.completado );

      default:
      return todo;
    }
  }

}
