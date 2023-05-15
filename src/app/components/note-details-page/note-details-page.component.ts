import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Note} from "../../shared/note.model";
import {NotesService} from "../../shared/notes.service";

@Component({
  selector: 'app-note-details-page',
  templateUrl: './note-details-page.component.html',
  styleUrls: ['./note-details-page.component.scss']
})
export class NoteDetailsPageComponent implements OnInit {
  note: Note = new Note;
  noteId!: number;
  new!: boolean;

  constructor(private notesService: NotesService,
              private router: Router,
              private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.note = this.notesService.get(params['id']);
        if (this.note != null) {
          this.noteId = params['id'];
          this.new = false;
        } else {
          this.new = true;
        }

      } else {
        this.new = true;
      }
    })
    // this.note = new Note();
  }

  onSubmit(noteForm: NgForm) {
    if (this.new) {
      this.notesService.add(noteForm.value);
    } else {

      this.notesService.update(this.noteId, noteForm.value.title, noteForm.value.content);
    }
    this.router.navigateByUrl("/q");
  }

  cancel() {
    this.router.navigateByUrl("/q");
  }

}
