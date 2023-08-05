import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-error-component",
  templateUrl: "./error-component.component.html",
  styleUrls: ["./error-component.component.scss"],
})
export class ErrorComponentComponent {
  @Input() title = "Error";
  @Input() text = "Oops... something is not right";
  @Input() retryFeature = false;
  @Output() retry = new EventEmitter();
}
