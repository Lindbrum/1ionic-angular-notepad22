import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Note } from '../interfaces/note';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: Note[] = [];
  public nuut: Note;
  public loaded = false;

  constructor(private storage: Storage, private http: HttpClient ) {

  }

  private res: any;

  load(): Promise<boolean> {

    // Return a promise so that we know when this operation has completed
    return new Promise((resolve) => {
      // Get the notes that were saved into storage
  this.http.get('http://localhost:8080/note/all').subscribe(response => console.log(response));
  this.getAllNote().subscribe(result => console.log(result));
  this.storage.get('notes').then((notes) => console.log(notes));
  this.getAllNote().subscribe(result => {

        // Only set this.notes to the returned value if there were values stored
        if (result != null){
          this.notes = result;
        }
        // this.getAllNote().subscribe(result => this.notes  = result) ;
        // This allows us to check if the data has been loaded in or not
        this.loaded = true;
        resolve(true);

      });


    });

  }

  save(): void {
    // Save the current array of notes to storage
    this.storage.set('notes', this.notes);
    this.load();
  }


  saveN(note): void {
    this.notes.push(note);
    // Save the current array of notes to storage
    this.storage.set('notes', this.notes);
    this.load();
  }


  update(t, c, iduser, color, id): string {

    this.http.put('http://localhost:8080/note/all/' + id, {
      title: t,
      content: c,
      idUser: iduser,
      color
    }).subscribe(response => this.res = JSON.stringify(response));

    return this.res; }


getAllNote(): Observable < Note[] > {
  return this.http.get<Note[]>('http://localhost:8080/note/all');
}



  getNote(id): Observable<Note> {
    // Return the note that has an id matching the id passed in


    return this.http.get<Note>('http://localhost:8080/note/all/' + id);
    // return this.notes.find(note => note.id === id);
  }

  createNote(title: string, content: string, color: string): void {

    // Create a unique id that is one larger than the current largest id
    // tslint:disable-next-line:radix
    const id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;

    this.notes.push({
      id_user: '',
      id: id.toString(),
      title,
      content, color

    });

    this.save();
    console.log('ok') ;
    // mettere color e id
    // this.http.post('http://localhost:8080/note/add?title=' + title + '
    // &content=' + content + '&user=lor'+ &color=' + color + '&id='+id , '').

    this.http.post('http://localhost:8080/note/add?title=' + title + '&content=' + content + '&user=lor' + '&color=' + color, '').
    subscribe(response => console.log(response));
  }

  deleteNote(id): void {

    // Get the index in the array of the note that was passed in
  // this.notes.splice(id, 1);
  console.log(id) ;

  this.http.delete('http://localhost:8080/note?id=' + (id)).subscribe(response => console.log(response));

  this.save();
 }

}

