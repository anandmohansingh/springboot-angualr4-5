import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpModule }    from '@angular/http';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule }   from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CourseComponent } from './components/course/course.component';
import { PriceComponent } from './components/price/price.component';
import { VideoComponent } from './components/video/video.component';
import { ContactComponent } from './components/contact/contact.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import {AjaxService} from './services/ajax.service';
const ROUTES=[
              {path: '',redirectTo: 'home',pathMatch: 'full' },
              {path: 'home',children:[
                { path: '' , component: HomeComponent},
                { path: '' , component: HeaderComponent,outlet:'header'},
                 { path: '' , component: FooterComponent,outlet:'footer'},
               ]}, 
                {path: 'about',children:[
                { path: '' , component: AboutComponent},
                { path: '' , component: HeaderComponent,outlet:'header'},
                 { path: '' , component: FooterComponent,outlet:'footer'},
               ]},
                {path: 'courses',children:[
                { path: '' , component: CourseComponent},
                { path: '' , component: HeaderComponent,outlet:'header'},
                 { path: '' , component: FooterComponent,outlet:'footer'},
               ]},
                {path: 'price',children:[
                { path: '' , component: PriceComponent},
                { path: '' , component: HeaderComponent,outlet:'header'},
                 { path: '' , component: FooterComponent,outlet:'footer'},
               ]},
                {path: 'video',children:[
                { path: '' , component: VideoComponent},
                { path: '' , component: HeaderComponent,outlet:'header'},
                 { path: '' , component: FooterComponent,outlet:'footer'},
               ]},
                {path: 'contact',children:[
                { path: '' , component: ContactComponent},
                { path: '' , component: HeaderComponent,outlet:'header'},
                 { path: '' , component: FooterComponent,outlet:'footer'},
               ]},
               {path: 'course-detail/:courseName',children:[
                { path: '' , component: CourseDetailComponent},
                { path: '' , component: HeaderComponent,outlet:'header'},
                 { path: '' , component: FooterComponent,outlet:'footer'},
               ]}   
             ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    CourseComponent,
    PriceComponent,
    VideoComponent,
    ContactComponent,
    CourseDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
