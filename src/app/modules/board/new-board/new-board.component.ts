import { Component } from '@angular/core';

import swal from 'sweetalert2';



@Component({
    selector:'at-new-board',
    templateUrl: './new-board.component.html',
    styleUrls: ['./new-board.component.scss']
    
})

export class NewBoard { 

    private newBoard(){
        swal({
            title: 'Nome do Nova Board',
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
                'Pode encher de Cards',
                'success'
              )
            }
          })
    }
}