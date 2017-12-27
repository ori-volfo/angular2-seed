import {Component} from "angular2/core";
import {AuthorsService} from "./course.service";

@Component({
    selector: 'authors',
    template: `<h2>{{title}}</h2>
    <ul>
        <li *ngFor="#author of authors">{{author}}</li>
    </ul>
    `,
    providers: [AuthorsService]

})
export class AuthorsComponent{
    title: string = 'Authors';
    authors: string[];

    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }
}