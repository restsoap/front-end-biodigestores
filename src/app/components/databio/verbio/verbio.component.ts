import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BiodigestoresApiService } from 'src/app/services/biodigestores-api.service';

@Component({
  selector: 'app-verbio',
  templateUrl: './verbio.component.html',
  styleUrls: ['./verbio.component.css']
})
export class VerbioComponent implements OnInit {

  BiodigestorList$!:Observable<any[]>;
  ExtensionList$!:Observable<any[]>;
  ExtensionList:any=[];

  //map data
  ExtensionListMap:Map<number, string> = new Map()

  constructor(private service:BiodigestoresApiService) { }

  ngOnInit(): void {
    this.BiodigestorList$ = this.service.getBiodigestorList();
    this.ExtensionList$ = this.service.getExtensionList();
    this.refreshExtensionMap();
  }

  //variable (property)
  tituloModal:string = '';
  activateAddEditExtensioncomponent:boolean = false;
  extension:any;

  modalAdd(){
    this.extension = {
      id: 0,
      temperaturainterna: null,
      temperaturaexterna: null,
      humedad: null,
      caudal: null,
      pH: null,
      extensionId: null
    }
    this.tituloModal = "Agregar Datos Biodigestor";
    this.activateAddEditExtensioncomponent = true;
  }

  modalEdit(item:any){
    this.extension = item;
    this.tituloModal = "Editar Datos Biodigestor";
    this.activateAddEditExtensioncomponent = true;
  }

  delete(item: any){
    if(confirm(`¿Estás seguro de que quieres eliminar los datos del Biodigestor? ${item.id}`)) {
      this.service.deleteBiodigestor(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess) {
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showDeleteSuccess) {
          showDeleteSuccess.style.display = "none"
        }
      }, 4000);
      this.BiodigestorList$ = this.service.getBiodigestorList();
      })
    }
  }

  modalClose(){
    this.activateAddEditExtensioncomponent = false;
    this.BiodigestorList$ = this.service.getBiodigestorList();
  }

  //listamos la informacion mapeada de dos tablas 
  refreshExtensionMap() {
    this.service.getExtensionList().subscribe(data => {
      this.ExtensionList = data;

      for(let i = 0; i < data.length; i++) {
        this.ExtensionListMap.set(this.ExtensionList[i].id, this.ExtensionList[i].nombre);
      }
    })
  }
  
}

