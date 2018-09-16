import { Component, ViewChild, NgModule } from '@angular/core';

import { ActivityComponent } from '../../../modules/items/activity/activity.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import swal from 'sweetalert2';


@NgModule({
    imports:[
        SweetAlert2Module.forRoot()
    ]
})

@Component({
    selector:'at-button-delete-activity',
    templateUrl: './delete-activity.component.html',
    styleUrls: ['./delete-activity.component.scss']
    
})

export class DeleteActivity {
    @ViewChild('deleteSwal') private deleteSwal: ActivityComponent;

    private delete(){
        swal({
            title: 'Deseja APAGAR esta Atividade?',
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
                'Tchau Tchau Atividade.',
                'success'
              )
            }
          })
    }
 }