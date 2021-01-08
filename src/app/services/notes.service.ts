import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Note } from '../interfaces/note';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Urls} from '../constants/urls';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: Note[] = [];
  public loaded = false;



  constructor(private storage: Storage, private http: HttpClient ) {

  }
/*
  getAll(): Observable<Note[]>{
  //  return this.http.get<Note[]>(Urls.allNotes);  ci servirà più avanti
    return of(this.notes); // "of" converte array in uno stream di dati
  }
*/

  load(): Promise<boolean> {

    // Return a promise so that we know when this operation has completed
    return new Promise((resolve) => {

      // Get the notes that were saved into storage
      this.storage.get('notes').then((notes) => {

        // Only set this.notes to the returned value if there were values stored
        if (notes != null){
          this.notes = notes;
        }

        // This allows us to check if the data has been loaded in or not
        this.loaded = true;
        resolve(true);

      });

    });

  }

  save(): void {
    // Save the current array of notes to storage
    this.storage.set('notes', this.notes);
  }

  getNote(id): Note {
    // Return the note that has an id matching the id passed in
    // console.log(this.http.get('http://localhost:8080/note/all'));
    return this.notes.find(note => note.id === id);
  }
/*
  createNote(title, content): void {

    // Create a unique id that is one larger than the current largest id
    // tslint:disable-next-line:radix
    const id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;

    this.notes.push({
      id: id.toString(),
      title,
      content: ''
    });

    this.save();

  }
*/

  createNote(title, content): void {

    // Create a unique id that is one larger than the current largest id
    // tslint:disable-next-line:radix
    const id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;

    this.notes.push({
      id: id.toString(),
      title,
      content
    });


    const postData = {
      title,
      content,
      user: '0000252525'
    };
    this.save();
    console.log('ok') ;
    this.http.post('http://localhost:8080/note/add?title=' + title + '&content=' + content + '&user=lor', '').
    subscribe(response => console.log(response));
  }

  deleteNote(note): void {

    // Get the index in the array of the note that was passed in
    const index = this.notes.indexOf(note);
    console.log(index) ;

    this.http.delete('http://localhost:8080/note?id=' + (index + 1)).subscribe(response => console.log(response));
  /*  {
      console.log(data);
      this.result = data;
    }, error =>
    {
      console.log(error);
    }, () =>
    {
      console.log('complete!');
    });*/
// localhost:8080/note?id=2
    // Delete that element of the array and resave the data
    if (index > -1){
      this.notes.splice(index, 1);
      this.save();
 }

  }

}
// prova2
