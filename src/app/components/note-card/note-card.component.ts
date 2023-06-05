import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  RendererFactory2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {


  @Input() cardTitle: string | undefined;
  @Input() cardText: string | undefined;
  @Input() link: string | undefined;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyContent') bodyContent: ElementRef<HTMLElement>;
  constructor(private rendererFactory: RendererFactory2) {
  }

  ngOnInit(): void {
    const renderer = this.rendererFactory.createRenderer(null, null);
    if (this.bodyContent != undefined) {
      let style = window.getComputedStyle(this.bodyContent.nativeElement, null);
      let viewableHeight = parseInt(style.height, 10);

      if (this.bodyContent.nativeElement.scrollHeight > viewableHeight) {
        renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
      } else {
        renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
      }
    }
  }

  onXButtonClick() {

    this.deleteEvent.emit();

  }
}
