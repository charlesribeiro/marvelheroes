import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalErrorComponent } from "./error/error.component";
import { GlobalLoaderComponent } from "./loader/loader.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";

@NgModule({
  declarations: [
    GlobalErrorComponent,
    GlobalLoaderComponent,
    SearchBarComponent,
  ],
  imports: [CommonModule],
  exports: [GlobalErrorComponent, GlobalLoaderComponent, SearchBarComponent],
})
export class SharedModule {}
