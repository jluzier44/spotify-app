import { Component } from "@angular/core";
import { BodyService } from "./body.service";
import { Playlist } from "./playlist.model";

@Component ({
    selector: "spotify-body",
    templateUrl: "body.component.html",
    styleUrls: ["body.component.css"]
})

export class BodyComponent {
    playlists: Playlist [] = [];

    constructor(private bodyService: BodyService) {
    }

    ngOninit(): void {
        console.log("Populating playlist data.");
        this.showPlaylist();
    }

    showPlaylist() {
        this.bodyService.getPlaylist().subscribe((data: Playlist []) => {
            console.log(data);
            for (var item in data) {
                console.log(data[item]);
            }
        })
    }
}
