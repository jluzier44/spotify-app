import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Playlist } from "./playlist.model";

@Injectable({providedIn: 'root'})
export class BodyService {
    private playlistUrl:string = 'https://spotify-app-f29aa-default-rtdb.firebaseio.com/playlists'
    
    constructor(private http: HttpClient) {

    }

    getPlaylist() {
        return this.http.get<Playlist []>(this.playlistUrl);
    }
}