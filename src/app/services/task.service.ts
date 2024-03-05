import { Injectable } from '@angular/core';
import { Task, newTask } from '../Task';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks';
  subject = new Subject<any>();
  constructor(private http: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  public postTask(task: newTask): Observable<any> {
    console.log('posted task: ', task);

    return this.http.post(this.apiUrl, task);
  }

  public editTask(task: Task): Observable<any> {
    console.log('updated task: ', task);
    return this.http.put<any>(this.apiUrl + '/' + task.id, task);
  }

  public deleteTask(task: Task): Observable<any> {
    console.log('deleted task: ', task);
    return this.http.delete<any>(this.apiUrl + '/' + task.id);
  }
}
