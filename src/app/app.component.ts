import { Component } from '@angular/core';
import { Tarefa } from 'src/models/Tarefa';
import { TarefasLista } from 'src/models/TarefasLista';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private list = new TarefasLista("Senac", [
    new Tarefa("Estudar HTML"),
    new Tarefa("Estudar CSS"),
    new Tarefa("Estudar JAVASCRIPT"),
  ]);
  get username(): string {
  return this.list.usuario;
  }

  get itemCount(): number {
  return this.list.tarefas.filter(item => !item.completo).length;
  }

  get items(): readonly Tarefa[] {
    return this.list.tarefas.filter(item => this.showComplete || !item.completo);
  }

  addTarefa(newItem: string) {
    if (newItem != "") {
      this.list.addTarefa(newItem);
    }
  }
  showComplete: boolean = false;
}
