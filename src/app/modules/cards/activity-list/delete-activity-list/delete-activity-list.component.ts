import { Component, ViewChild, NgModule } from '@angular/core';


import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';
import { ActivityListComponent } from '../activity-list.component';

@NgModule({
    imports:[
        SweetAlert2Module.forRoot()
    ]
})

@Component({
    selector:'at-delete-activity-list',
    templateUrl: '/delete-activity-list.component.html',
    styleUrls: ['/delete-activity-list.component.scss']
    
})

export class DeleteActivityList {
    @ViewChild('deleteSwal') private deleteSwal: ActivityListComponent;

    private deleteActivityList(){
        swal({
            title: 'Deseja APAGAR toda a Lista de Atividades?',
            text: "As mudanças são IRREVERSÍVEIS!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#5cb85c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, Apagar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              swal(
                'Apagado!',
                'Tchau Tchau Lista.',
                'success'
              )
            }
          })
    }
 }