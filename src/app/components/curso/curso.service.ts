import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //URL Base
  url = "http://localhost:3000/"

  //Vetor de Cursos
  "vetor":Curso[];


  //Construtor
  constructor(private http:HttpClient) { }

  //Obter todos os Cursos
  obterCursos():Observable<any>{
    return this.http.get(this.url+'cursos')
  }

  //Cadastrar Curso
  cadastrarCursos(curso:Curso):Observable<any>{
    return this.http.post(this.url+'cursos/', curso);
  }

  //Alterar Curso
  alterarCursos(id:any, curso: Curso):Observable<any>{
    return this.http.put(this.url+'cursos/'.concat(id),curso);
  }

  //Deletar Curso
  deletarCursos(id:any):Observable<any>{
    return this.http.delete(this.url+'cursos/'.concat(id));
  }
}
