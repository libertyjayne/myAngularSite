import { Component, OnInit } from '@angular/core';
import { faFolderOpen, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faLinkedIn = faLinkedinIn;
  faTwitter = faTwitter;
  faGitHub = faGithubAlt;
  faResume = faFolderOpen;
  faMail = faEnvelope;

  constructor() { }

  ngOnInit() {
  }

}
