import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ContribuidorService {

  private apiUrlContribuidor = 'http://localhost:8080/contribuidor';
  private apiUrlSites = 'http://localhost:8080/sites';

  constructor(private http: HttpClient) { }

  criarContribuidorESite(dadosForm: any) {
    const contribuidor = {
      nome: dadosForm.name,
      email: dadosForm.email,
      linkGithub: dadosForm.githubLink
    };

    const site = {
      titulo: dadosForm.title,
      descricao: dadosForm.description,
      linkSite: dadosForm.siteLink,
      stack: dadosForm.stack
      // contribuidor: será adicionado com ID depois
    };

    // Primeiro: cria o contribuidor
    return this.http.post<any>(`${this.apiUrlContribuidor}/create`, contribuidor).pipe(
      
      // Depois: cria o site com o ID retornado
      switchMap((res: any) => {
        const contribuidorId = res.id;
        const siteComContribuidor = {
          ...site,
          contribuidor: { id: contribuidorId } // só o id já basta se o backend estiver mapeado assim
        };
        return this.http.post(`${this.apiUrlSites}/create`, siteComContribuidor);
      })
    );
  }
}
