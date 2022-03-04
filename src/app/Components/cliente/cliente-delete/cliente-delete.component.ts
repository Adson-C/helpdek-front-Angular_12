import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from './../../../models/cliente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente: Cliente = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCraicao: ''
  }

  constructor(
    private service: ClienteService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.cliente.id = this.route.snapshot.paramMap.get('id');
    this.findById();
   }


    findById(): void {
      this.service.findById(this.cliente.id).subscribe(resposta => {
        resposta.perfis = []
        this.cliente = resposta;
      })
    }
  
  delete(): void{
    this.service.delete(this.cliente.id).subscribe(() => {
      this.toastr.success('Cliente excluído com sucesso', 'Delete');
      this.router.navigate(['clientes'])
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
