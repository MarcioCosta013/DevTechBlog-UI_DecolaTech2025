import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; //Validators: Fornece regras de validação para os campos do formulário (como obrigatoriedade e padrões).
import { ContribuidorService } from 'src/app/service/contribuidor.service';

@Component({
  selector: 'app-contribua-form',
  templateUrl: './contribua-form.component.html',
  styleUrls: ['./contribua-form.component.css']
})
export class ContribuaFormComponent {

  projectForm: FormGroup; //A variável projectForm armazenará o formulário e seus campos.

  stackOptions = ['Fullstack', 'Ferramentas Dev', 'Frontend', 'Backend', 'DevOps'];
  

  constructor(private fb: FormBuilder, private contribuidorService: ContribuidorService) { /* O FormBuilder é injetado no construtor (private fb: FormBuilder), 
                                                                                            * permitindo criar e gerenciar o formulário de forma eficiente.
                                                                                            */
    this.projectForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      githubLink: ['', [Validators.required, Validators.pattern('https?://.+')]],
      title: ['', Validators.required],
      description: ['', Validators.required],
      siteLink: ['', Validators.pattern('https?://.+')],
      stack: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.projectForm.valid) {
      this.contribuidorService.criarContribuidorESite(this.projectForm.value)
        .subscribe({
          next: (res) => {
            console.log('Sucesso!', res);
            alert('Cadastro feito com sucesso!');
          },
          error: (err) => {
            console.error('Erro no envio', err);
            alert('Erro ao cadastrar. Verifique os dados.');
          }
        });
    } else {
      alert('Preencha todos os campos corretamente.');
    }
  }
}