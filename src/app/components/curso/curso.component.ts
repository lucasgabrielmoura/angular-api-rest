import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.sass']
})
export class CursoComponent implements OnInit {

  //Vetor de Cursos
  "vetor": Curso[];

  //Objeto da Classe Curso
  "curso" = new Curso();

  //Variavel de id para manipulação dos botões
  "idbutton":number;
  cursoId:any = document.getElementById("curso");
  inputCurso:any;
  inputValor:any;


  constructor(private cursos:CursoService) { }

  ngOnInit(): void {
    //Ao iniciar o sistema, deverar listar os cursos
    this.selecao()
    console.log()
  }
  

  //Cadastro
  cadastro(nomeC:string, valorC:number){
    console.log(this.curso)
    if(nomeC == undefined || valorC == undefined){
      alert("Faltou preencher algum campo")
    }else{
      this.idbutton = -1
      this.cursos.cadastrarCursos(this.curso).subscribe(
        (res:Curso) =>{
          this.curso = new Curso();
          this.selecao()
        }
      )
    }
  }

  //Seleção
  selecao(){
    this.cursos.obterCursos().subscribe(
      (res:Curso[]) => {
        this.vetor = res;
      }
    )
  }


  //Alterar
  alterar(id:any):void{
    if(this.curso.nomeCurso === undefined || this.curso.valorCurso === undefined){
      alert("Você deve preencher os campos no formulário acima para modificar")
    }else{
      this.idbutton = id;
      this.cursos.alterarCursos(id,this.curso).subscribe(
        (res:Curso) =>{
          this.curso = new Curso();
          this.selecao()
        }
      )
    }
    
  }

  //Remover
  excluir(id:any):void{
    this.cursos.deletarCursos(id).subscribe(
      (res:Curso) =>{
        this.selecao()
      }
    )
  }
}
