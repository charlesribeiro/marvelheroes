import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CharData } from "../../models/characterData.interface";

@Component({
  selector: "app-character-list",
  templateUrl: "./character-list.component.html",
})
export class CharacterListComponent {
  @Output() selectedId = new EventEmitter<number>();
  @Input() list: CharData[] = [];

  onScroll(){
    debugger;
  }
}
