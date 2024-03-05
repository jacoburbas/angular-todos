import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs';
import { TasksStoreService } from 'src/app/services/tasks-store.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface DialogData {
  type: 'add task' | 'edit task';
  id: number;
}

@Component({
  selector: 'app-task-action',
  templateUrl: './task.action.component.html',
  styleUrls: ['./task.action.component.scss'],
})
export class TaskActionComponent implements OnInit {
  subscription: Subscription;
  taskAction: String;
  taskIdToEdit: number;
  public titleCtrl = new FormControl('', [Validators.required]);
  public textCtrl = new FormControl('', [Validators.required]);
  public dateCtrl = new FormControl('', [Validators.required]);

  public taskActionForm = new FormGroup({
    id: this.titleCtrl,
    title: this.titleCtrl,
    text: this.textCtrl,
    date: this.dateCtrl,
  });

  constructor(
    private storeService: TasksStoreService,
    private dialogRef: MatDialogRef<TaskActionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    this.taskAction = this.dialogRef.componentInstance.data.type;
    this.taskIdToEdit = this.dialogRef.componentInstance.data.id;
  }

  onFormSubmit() {
    if (this.taskAction === 'add task') {
      const newTask: Task = {
        title: this.titleCtrl.value,
        text: this.textCtrl.value,
        date: this.dateCtrl.value,
      };
      this.storeService.postTask(newTask);
    } else if (this.taskAction === 'edit task') {
      const newTask: Task = {
        title: this.titleCtrl.value,
        text: this.textCtrl.value,
        date: this.dateCtrl.value,
        id: this.taskIdToEdit,
      };
      this.storeService.editTask(newTask);
    }
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
