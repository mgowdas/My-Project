import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { PhotosComponent } from './photos/photos.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { AuthGuard } from './auth.guard';
import { MemberprofileComponent } from './memberprofile/memberprofile.component';
import { JoinfreshComponent } from './joinfresh/joinfresh.component';
import { JoingroupComponent } from './joingroup/joingroup.component';
import { JoinhrComponent } from './joinhr/joinhr.component';
import { JoinldComponent } from './joinld/joinld.component';
import { Grp1Component } from './grp1/grp1.component';
import { Grp2Component } from './grp2/grp2.component';
import { Grp3Component } from './grp3/grp3.component';
import { Grp6Component } from './grp6/grp6.component';
import { Grp5Component } from './grp5/grp5.component';
import { Grp4Component } from './grp4/grp4.component';
import { AllfriendsComponent } from './allfriends/allfriends.component';
import { User01Component } from './user01/user01.component';




const routes: Routes = [{
  path : 'home',
  canActivate: [AuthGuard],
  component : HomeComponent
},{
  path : 'groups',
  canActivate: [AuthGuard],
  component : GroupsComponent
},{
  path : 'members',
  canActivate: [AuthGuard],
  component : MembersComponent
},{
  path : 'photos',
  canActivate: [AuthGuard],
  component : PhotosComponent
},{
  path : 'profile',
  canActivate: [AuthGuard],
  component : ProfileComponent
},{
  path : 'register',
  component : RegisterComponent
},{
  path : 'userhome',
  canActivate: [AuthGuard],
  component : UserhomeComponent
},{
  path : 'memberprofile',
  component : MemberprofileComponent
},
{path:'joingroup',component:JoingroupComponent},
{path:'joinfresh',component:JoinfreshComponent},
{path:'joinhr',component:JoinhrComponent},
{path:'joinld',component:JoinldComponent},
{path:'grp1',component:Grp1Component},
{path:'grp2',component:Grp2Component},
{path:'grp3',component:Grp3Component},
{path:'grp4',component:Grp4Component},
{path:'grp5',component:Grp5Component},
{path:'grp6',component:Grp6Component},
{path:'home/allfriends',component:AllfriendsComponent},
{path:'home/groups',component:GroupsComponent},
{path:'members/user01',component:User01Component},
{path:'home/allfriends/user01',component:User01Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
