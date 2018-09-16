import { Component } from '@angular/core';

import swal from 'sweetalert2';



@Component({
    selector: 'at-new-activity',
    templateUrl: './new-activity.component.html',
    styleUrls: ['./new-activity.component.scss']

})

export class NewActivity {

    private newAtivity() {
        swal({
            title: 'Criando uma Nova Atividade',
            html:
                '<h2>Preencha os Campos Abaixo</h2>' +
                '<input id="swal-input1" class="swal2-input" autofocus placeholder="Título">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Descrição">',
            preConfirm: function () {
                return new Promise(function (resolve) {
                    if (true) {
                        resolve([
                            document.getElementById('swal-input1').value,
                            document.getElementById('swal-input2').value
                        ]);
                    }
                });
            }
        }).then(function (result) {
            swal(JSON.stringify(result));
        })
    }
}
        // Encontrei um empecilho em value 