import {
  AfterViewInit,
  Component,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { SongResponse } from '../../song/song.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, AfterViewInit {
  songList: Observable<SongResponse>;
  term: string = 'null';
  select: boolean = false;
  kind: string = 'music';

  constructor(private itunes: ApiService) {
    this.songList = this.itunes.searchSongs(this.term, this.kind);
  }

  get isSelect() {
    return this.select;
  }
  set isSelect(value) {
    this.kind = value ? 'movie' : 'music';
    this.songList = this.itunes.searchSongs(this.term, this.kind);
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit() {}

  getItems(ev) {
    const value = ev.target.value;
    if (value.trim().length > 0) {
      this.term = value;
      console.log(value);
      this.songList = this.itunes.searchSongs(this.term, this.kind);
    }
  }
}
