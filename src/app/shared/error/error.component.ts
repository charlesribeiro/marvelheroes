import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
})
export class GlobalErrorComponent {
  @Input() title = "Error";
  @Input() text = "Oops... something is not right";
  @Input() retryFeature = false;
  @Output() retry = new EventEmitter();
}
