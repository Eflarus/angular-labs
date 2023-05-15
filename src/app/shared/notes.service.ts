import {Injectable} from '@angular/core';
import {Note} from "./note.model";
import {moveItemInArray} from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: Note[] = new Array<Note>();

  constructor() {
  }

  get(id: number): Note {
    return this.notes[id];
  }

  getId(note: Note): number {
    return this.notes.indexOf(note);
  }

  getAll(): Note[] {
    return this.notes
  }

  add(note: Note): number {
    let newLength = this.notes.push(note);
    let noteId = newLength - 1;
    return noteId;
  }

  update(id: number, title: string, content: string): void {
    let note = this.notes[id];
     note.title = title;
     note.content = content;
  }

  delete(id: number): void {
    this.notes.splice(id, 1);
  }

  move(id: number, to: number): void {
    moveItemInArray(this.notes, id, to);
  }
}

