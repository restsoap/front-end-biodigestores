import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BiodigestoresApiService } from 'src/app/services/biodigestores-api.service';

@Component({
  selector: 'app-verext',
  templateUrl: './verext.component.html',
  styleUrls: ['./verext.component.css']
})
export class VerextComponent implements OnInit {

  ExtensionList$!: Observable<any[]>;
  UbicacionesList$!: Observable<any[]>;
  UbicacionesList:any=[];

  //Map data
  UbicacionesMap:Map<number, string> = new Map();

  constructor(private service: BiodigestoresApiService) { }

  ngOnInit(): void {
    this.ExtensionList$ = this.service.getExtensionList();
  }

}
