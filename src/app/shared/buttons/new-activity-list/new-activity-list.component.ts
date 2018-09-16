import { Component } from '@angular/core';

import swal from 'sweetalert2';



@Component({
    selector:'at-new-activity-list',
    templateUrl: './new-activity-list.component.html',
    styleUrls: ['./new-activity-list.component.scss']
    
})

export class NewActivityList { 

    private newCard(){
        swal({
            title: 'Nome do novo Card-list',
            input: 'text',
            showCancelButton: true,
            confirmButtonColor: '#5cb85c',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Criar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.value) {
              swal(
                'Criado com Sucesso',
                'Pode encher de atividades',
                'success'
              )
            }
          })
    }
}