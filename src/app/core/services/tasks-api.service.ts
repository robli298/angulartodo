import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root',
})
export class TasksApiService {
  constructor(private db: AngularFirestore) {}

  getTaskList(): Observable<TasksAPIResponseModel[]> {
    return this.db
      .collection('taskslist')
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
