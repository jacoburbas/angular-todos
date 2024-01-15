import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskActionComponent } from './components/task-action/task.action.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromTasks from './store/tasks.reducers';
import { TasksEffects } from './store/tasks.effects';
import { TasksStoreService } from './services/tasks-store.service';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'admin',
    component: TasksComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskActionComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ tasks: fromTasks.reducer }),
    EffectsModule.forRoot([TasksEffects]),
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [TasksStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
