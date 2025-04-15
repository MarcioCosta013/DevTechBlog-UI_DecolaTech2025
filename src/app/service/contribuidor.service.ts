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
      nome: dadosForm.nome,
      email: dadosForm.email,
      githubLink: dadosForm.githubLink
    };

    const site = {
      titulo: dadosForm.titulo,
      descricao: dadosForm.descricao,
      linkSite: dadosForm.linkSite,
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
          contribuidor: { id: contribuidorId} // só o id já basta se o backend estiver mapeado assim
        };
        return this.http.post(`${this.apiUrlSites}/create`, siteComContribuidor);
      })
    );
  }
}
