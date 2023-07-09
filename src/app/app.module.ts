import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SearchPageComponent } from './body/search-page.component';
import { YourLibraryComponent } from './body/your-library.component';
import { HistoryComponent } from './header/history.component';
import { LibraryButtonsComponent } from './header/library-buttons.component';
import { TopBarComponent } from './header/topbar.component';
import { UserDropdownComponent } from './header/user-dropdown.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { SidebarButtonsComponent } from './sidebar/sidebar-buttons.component';
import { SidebarPlaylistComponent } from './sidebar/sidebar-playlist.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PlaylistCardComponent } from './body/playlist-card.component';
import { AccountComponent } from './body/account.component';
import { ProfileComponent } from './body/profile.component';
import { UserInfoComponent } from './header/user-info.component';
import { SidebarLibraryButtonsComponent } from './sidebar/sidebar-library-buttons/sidebar-library-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HistoryComponent,
    LibraryButtonsComponent,
    UserDropdownComponent,
    SidebarComponent,
    SidebarButtonsComponent,
    SidebarPlaylistComponent,
    BodyComponent,
    LayoutMainComponent,
    SearchPageComponent,
    YourLibraryComponent,
    PlaylistCardComponent,
    AccountComponent,
    ProfileComponent,
    UserInfoComponent,
    SidebarLibraryButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
