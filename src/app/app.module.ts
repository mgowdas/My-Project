import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlserviceService } from './urlservice.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CallbackPipe } from './filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { GroupsComponent } from './groups/groups.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MemberprofileComponent } from './memberprofile/memberprofile.component';
import { Grp1Component } from './grp1/grp1.component';
import { Grp2Component } from './grp2/grp2.component';
import { Grp3Component } from './grp3/grp3.component';
import { Grp4Component } from './grp4/grp4.component';
import { Grp5Component } from './grp5/grp5.component';
import { Grp6Component } from './grp6/grp6.component';
import { AllfriendsComponent } from './allfriends/allfriends.component';
import { User01Component } from './user01/user01.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    GroupsComponent,
    PhotosComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    RegisterComponent,
    UserhomeComponent,
    ContentComponent,
    SidebarComponent,
    CallbackPipe,
    MemberprofileComponent,
    Grp1Component,
    Grp2Component,
    Grp3Component,
    Grp4Component,
    Grp5Component,
    Grp6Component,
    AllfriendsComponent,
    User01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UrlserviceService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
