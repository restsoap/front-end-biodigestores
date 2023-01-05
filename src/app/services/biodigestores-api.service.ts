import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BiodigestoresApiService {

  readonly biodigestorAPIUrl = "https://localhost:7236/api";
  constructor(private http:HttpClient) { }

  getBiodigestorList():Observable<any[]> {
    return this.http.get<any>(this.biodigestorAPIUrl + '/Biodigestors');
  }

  addBiodigestor(data:any) {
    return this.http.post(this.biodigestorAPIUrl + '/Biodigestors', data);
  }

  updateBiodigestor(id:number|string, data:any) {
    return this.http.put(this.biodigestorAPIUrl + `/Biodigestors/${id}`, data);
  }

  deleteBiodigestor(id:number|string) {
    return this.http.delete(this.biodigestorAPIUrl + `/Biodigestors/${id}`);
  }

  //Extensiones API

  getExtensionList():Observable<any[]> {
    return this.http.get<any>(this.biodigestorAPIUrl + '/Extensions');
  }

  addExtension(data:any) {
    return this.http.post(this.biodigestorAPIUrl + '/Extensions', data);
  }

  updateExtension(id:number|string, data:any) {
    return this.http.put(this.biodigestorAPIUrl + `/Extensions/${id}`, data);
  }

  deleteExtension(id:number|string) {
    return this.http.delete(this.biodigestorAPIUrl + `/Extensions/${id}`);
  }

  //ubicaciones

  getubicacionList():Observable<any[]> {
    return this.http.get<any>(this.biodigestorAPIUrl + '/Ubicacions');
  }

  addubicacion(data:any) {
    return this.http.post(this.biodigestorAPIUrl + '/Ubicacions', data);
  }

  updateubicacion(id:number|string, data:any) {
    return this.http.put(this.biodigestorAPIUrl + `/Ubicacions/${id}`, data);
  }

  deleteubicacion(id:number|string) {
    return this.http.delete(this.biodigestorAPIUrl + `/Ubicacions/${id}`);
  }

}