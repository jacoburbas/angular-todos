import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './components/admin/admin.component';
import { MatCardModule } from '@angular/material/card';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskActionComponent,
    LoginComponent,
    DashboardComponent,
    AdminComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ tasks: fromTasks.reducer }),
    EffectsModule.forRoot([TasksEffects]),
    ReactiveFormsModule,
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [TasksStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
