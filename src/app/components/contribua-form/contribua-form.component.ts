import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //Validators: Fornece regras de validação para os campos do formulário (como obrigatoriedade e padrões).

@Component({
  selector: 'app-contribua-form',
  templateUrl: './contribua-form.component.html',
  styleUrls: ['./contribua-form.component.css']
})
export class ContribuaFormComponent {

  projectForm: FormGroup; //A variável projectForm armazenará o formulário e seus campos.

  stackOptions = ['Fullstack', 'Ferramentas Dev', 'Frontend', 'Backend', 'DevOps'];

  constructor(private fb: FormBuilder) { //O FormBuilder é injetado no construtor (private fb: FormBuilder), permitindo criar e gerenciar o formulário de forma eficiente.
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      githubLink: ['', [Validators.required, Validators.pattern('https?://.+')]],
      title: ['', Validators.required],
      description: ['', Validators.required],
      siteLink: ['', Validators.pattern('https?://.+')],
      stack: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.projectForm.valid) {
      console.log('Form Data:', this.projectForm.value);
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}