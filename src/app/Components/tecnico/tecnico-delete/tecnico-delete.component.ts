import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TecnicoService } from './../../../services/tecnico.service';
import { Tecnico } from './../../../models/tecnico';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-delete',
  templateUrl: './tecnico-delete.component.html',
  styleUrls: ['./tecnico-delete.component.css']
})
export class TecnicoDeleteComponent implements OnInit {

  tecnico: Tecnico = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCraicao: ''
  }

  constructor(
    private service: TecnicoService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.tecnico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }


    findById(): void {
      this.service.findById(this.tecnico.id).subscribe(resposta => {
        resposta.perfis = []
        this.tecnico = resposta;
      })
    }
  
  delete(): void{
    this.service.delete(this.tecnico.id).subscribe(() => {
      this.toastr.success('Tecnico excluído com sucesso', 'Delete');
      this.router.navigate(['tecnicos'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.array.forEach(element => {
          this.toastr.error(element.message);
        });
        
      }else {
        this.toastr.error(ex.error.message);
      }
      
    })
  }
}
