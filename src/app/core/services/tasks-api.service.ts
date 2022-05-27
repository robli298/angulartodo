import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { TasksListModel } from '../models/tasks-list.model';

export interface TasksAPIResponseModel {
  id: number;
  name: string;
  index: number;
  tasks: {
    id: string;
    name: string;
    index: number;
  }[];
}

const TASKS_LIST_COLLECTION_NAME = 'taskslist';

@Injectable({
  providedIn: 'root',
})
export class TasksApiService {
  constructor(private db: AngularFirestore) {}

  getTaskList(): Observable<TasksListModel[]> {
    return this.db
      .collection(TASKS_LIST_COLLECTION_NAME)
      .snapshotChanges()
      .pipe(
        map((response) =>
          response.map((item) => {
            return {
              ...{ id: item.payload.doc.id },
              ...(item.payload.doc.data() as any),
            };
          })
        )
      );
  }
}
