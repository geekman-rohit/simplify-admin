import { Component, OnInit } from '@angular/core';
declare var MediumEditor: any;
declare var $: any;
@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {

    const elements = document.querySelectorAll('.editable'),
    editor = new MediumEditor(elements, {
      buttonLabels: 'fontawesome',
      placeholder: {
           text: 'Message',
           hideOnClick: true
       },
       toolbar: {
            buttons: ['bold', 'italic', 'ubderline', 'anchor', 'quote', 'h2',
             'h3', 'h4', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'colorPicker',
             'strikethrough', 'subscript', 'superscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        },
    });
  }

}
