import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {AppComponent} from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { InformationModule } from './information/information.module'
import { StoreModule } from '@ngrx/store'
import { HttpClientModule } from '@angular/common/http';
import { reducer } from './shared/counter.reducer'

@NgModule({
    declarations: [
        AppComponent        
    ],

    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        InformationModule,
        RouterModule,
        AppRoutingModule,
       // StoreModule.forRoot({})
    ],
    providers:[],
    bootstrap: [AppComponent]
})

export class AppModule { }
