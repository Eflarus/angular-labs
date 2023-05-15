import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnInit} from '@angular/core';
import {Note} from "../../shared/note.model";
import {NotesService} from "../../shared/notes.service";
import {CdkDragDrop} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        animate('0.2s', style({
          height: '*',
          marginBottom: '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate('0.2s')
      ]),
      transition('* => void', [
        animate('0.1s', style({
          transform: 'scale(1.05)',
        })),
        animate('0.2s', style({
          transform: 'scale(1)',
          opacity: 0.75,
        })),
        animate('0.1s ease-out', style({
          transform: 'scale(0.65)',
          opacity: 0,
        })),
        animate('0.2s ease-out', style({
          height: 0,
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        })),
      ])
    ])
  ]

})
export class NotesListComponent implements OnInit {
  searchTerm = '';

  notes: Note[] = Array<Note>();
  filteredNotes: Note[] = Array<Note>();

  constructor(private notesService: NotesService) {
  }

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
    this.filteredNotes = this.notes;

  }

  deleteNote(id: number) {
    this.notesService.delete(id)

  }

  filter(query: string) {
    query = query.toLowerCase().trim();

    let allResults: Array<Note> = new Array<Note>();

    let terms: string[] = query.split(' ');
    terms = this.removeDuplicates(terms);

    terms.forEach(term => {
       let results  = this.relevantNotes(term);

       allResults = [...allResults, ...results]
    })

    this.filteredNotes = this.removeDuplicates(allResults);
  }

  removeDuplicates(arr: Array<any>): Array<any> {
    let uniqueResults: Set<any> = new Set<any>();
    arr.forEach(e => uniqueResults.add(e));
    return Array.from(uniqueResults);
  }

  relevantNotes(query: string): Array<Note> {
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if (note.content.toLowerCase().includes(query) || note.title.toLowerCase().includes(query)) {
        return true;
      }
      return false;
    })
    return relevantNotes;
  }

  drop($event: CdkDragDrop<Note[]>) {

    console.log("prev = ", $event.previousIndex );
    console.log("curr = ", $event.currentIndex );

    this.notesService.move($event.previousIndex, $event.currentIndex );

  }
}

