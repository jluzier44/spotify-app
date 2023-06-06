import { Component } from "@angular/core";
import { mock_playlists } from "./mock-playlist";
import { Playlist } from "./playlist.model";

@Component ({
    selector: "spotify-body",
    templateUrl: "body.component.html",
    styleUrls: ["body.component.css"]
})

export class BodyComponent {
    playlists:Playlist[] = [];

    constructor() {
        for (var playlist of mock_playlists) {
            this.playlists.push(new Playlist(playlist));
        }
    }

}