import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NotesService } from '../services/notes.service';
import { Note } from '../interfaces/note';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  public note: { id: string; title: string; content: string; color: string, id_user: string };
  color: string;

  constructor(private route: ActivatedRoute, private notesService: NotesService, private navCtrl: NavController) {

    // Initialise a placeholder note until the actual note can be loaded in
    this.note = {
      id_user: '',
      id: '',
      title: '',
      content: '',
      color: '',
    };

  }

  ngOnInit() {

    // Get the id of the note from the URL
    const noteId = this.route.snapshot.paramMap.get('id');

    // Check that the data is loaded before getting the note
    // This handles the case where the detail page is loaded directly via the URL
    if (this.notesService.loaded){
      this.notesService.getNote(noteId).subscribe(result => this.note = result);

    } else {
      this.notesService.load().then(() => {
        this.notesService.getNote(noteId).subscribe(result => this.note = result);

      });
    }

  }

  noteChanged(){


    this.notesService.save();
  }

  deleteNote(){
    this.notesService.deleteNote(this.route.snapshot.paramMap.get('id'));

    this.navCtrl.navigateBack('/notes');

  }

  up(){
  const noteId = this.route.snapshot.paramMap.get('id');
  this.notesService.save();
  // Check that the data is loaded before getting the note
  // This handles the case where the detail page is loaded directly via the URL
  if (this.notesService.loaded){
  this.notesService.getNote(noteId).subscribe(result => this.note = result);

} else {
  this.notesService.load().then(() => {
    this.notesService.getNote(noteId).subscribe(result => this.note = result);
    this.navCtrl.navigateBack('/notes');
  });
}}}
