import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import {
  CharData,
  SeriesEventsItem,
} from "../../models/characterData.interface";

@Component({
  selector: "app-character-list-item",
  templateUrl: "./character-list-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListItemComponent {
  @Input() character: CharData;
  @Output() selectedId = new EventEmitter<number>();

  showDetails(): void {
    this.selectedId.emit(this.character.id);
  }

  get top3SeriesItems(): SeriesEventsItem[] {
    return this.character?.series?.items.slice(0, 3);
  }

  get top3EventsItems(): SeriesEventsItem[] {
    return this.character?.events?.items.slice(0, 3);
  }

  get fullImagePath(): string {
    return (
      this.character.thumbnail.path + "." + this.character.thumbnail.extension
    );
  }
}
