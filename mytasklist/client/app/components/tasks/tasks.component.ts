
import { Component } from '@angular/core';

@Component({
    moduleId: module.id, //this is mandatory if you use relative path like specified in templateurl
    selector: 'tasks',
    templateUrl: 'tasks.component.html'
})
export class TasksComponent {

}
