import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SongComponent } from "./song.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [SongComponent],
  exports: [SongComponent],
  imports: [CommonModule,IonicModule,]
})
export class SongModule {}
