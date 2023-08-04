import { Component, Input } from "@angular/core";
import { CharData } from "../../models/characterData.interface";

@Component({
  selector: "app-character-list-item",
  templateUrl: "./character-list-item.component.html",
})
export class CharacterListItemComponent {
  @Input() character: CharData;
}
