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

    ngOnInit(): void {
        console.log("Populating playlist data.");
        this.showPlaylist();
    }

    showPlaylist() {
        this.bodyService.getPlaylist().subscribe((data: Playlist []) => {
            console.log(data);
            var i = 0;
            for (var item in data) {
                console.log(data[item]);
                this.playlists[i] = data[item];
                i++;
            }
        })
    }
}
