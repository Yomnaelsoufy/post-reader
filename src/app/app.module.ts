import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { RecipeComponent } from './recipe/recipe.component';
import { PostItemComponent } from './post-item/post-item.component';
import { HistoryComponent } from './history/history.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    RecipeComponent,
    PostItemComponent,
    HistoryComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
