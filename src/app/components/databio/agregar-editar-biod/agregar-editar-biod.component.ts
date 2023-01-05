import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BiodigestoresApiService } from 'src/app/services/biodigestores-api.service';

@Component({
  selector: 'app-agregar-editar-biod',
  templateUrl: './agregar-editar-biod.component.html',
  styleUrls: ['./agregar-editar-biod.component.css']
})
export class AgregarEditarBiodComponent implements OnInit {

  BiodigestorList$!: Observable<any[]>;
  ExtensionList$!: Observable<any[]>;

  constructor(private service: BiodigestoresApiService) { }

  @Input() extension: any;
  id: number = 0;
  temperaturainterna!: number;
  temperaturaexterna!: number;
  humedad!: number;
  caudal!: number;
  pH!: number;
  extensionId!: number;

  ngOnInit(): void {
    this.id = this.extension.id;
    this.temperaturainterna = this.extension.temperaturainterna;
    this.temperaturaexterna = this.extension.temperaturaexterna;
    this.humedad = this.extension.humedad;
    this.caudal = this.extension.caudal;
    this.pH = this.extension.pH;
    this.extensionId = this.extension.extensionId;
    this.BiodigestorList$ = this.service.getBiodigestorList();
    this.ExtensionList$ = this.service.getExtensionList();

  }

  addBiodigestor(){
    var extension = {
      temperaturainterna: this.temperaturainterna,
      temperaturaexterna: this.temperaturaexterna,
      humedad: this.humedad,
      caudal: this.caudal,
      pH: this.pH,
      extensionId: this.extensionId
    }
    this.service.addBiodigestor(extension).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display = "none";
        }
      }, 4000);
    })
  }

  updateBiodigestor(){
    var extension = {
      id: this.id,
      temperaturainterna: this.temperaturainterna,
      temperaturaexterna: this.temperaturaexterna,
      humedad: this.humedad,
      caudal: this.caudal,
      pH: this.pH,
      extensionId: this.extensionId
    }
    var id:number = this.id;
    this.service.updateBiodigestor(id, extension).subscribe(res =>{
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display = "none";
        }
      }, 1000);
    })
  }

}

