import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public serverName = environment.apiUrl;
  constructor(private http: HttpClient) {

  }


  UpdateOrderStatus(newStatus: any, orderId: any): Observable<any> {
    //complete this function
    const url = `${this.serverName}/api/supplier/order/update/${orderId}`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("newStatus", newStatus);
    return this.http.post(url, {params:queryParams});
  }

  

  addEquipment(details: any, hospitalId: any): Observable<any> {
    //complete this function
    const url = `${this.serverName}/api/hospital/equipment`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("hospitalId", hospitalId);
    return this.http.post(url, {params:queryParams}, details);
  }


  getorders(): Observable<any> {

    //complete this function
    return this.http.get(`${this.serverName}/api/supplier/orders`);

  }


  getMaintenance(): Observable<any> {

    //complete this function
    return this.http.get(`${this.serverName}/api/technician/maintenance`);
  }


  getHospital(): Observable<any> {

    //complete this function
    return this.http.get(`${this.serverName}/api/hospitals`);
  }



  getEquipmentById(id: any): Observable<any> {

    //complete this function
    return this.http.get(`${this.serverName}/api/hospital/equipment/${id}`);
  }



  updateMaintenance(details: any, maintenanceId: any): Observable<any> {

    //complete this function
    return this.http.put(`${this.serverName}/api/technician/maintenance/update/${maintenanceId}`, details);

  }



  orderEquipment(details: any, equipmentId: any): Observable<any> {

    //complete this function
    const url = `${this.serverName}/api/hospital/order`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("equipmentId", equipmentId);
    return this.http.post(url, {params:queryParams},details);
    
  }



  scheduleMaintenance(details: any, equipmentId: any): Observable<any> {

    //complete this function
    const url = `${this.serverName}/api/hospital/maintenance/schedule`;

    let queryParams = new HttpParams();
    queryParams = queryParams.append("equipmentId", equipmentId);
    return this.http.post(url, {params:queryParams}, details);
  }



  createHospital(details: any): Observable<any> {
    //complete this function
    return this.http.post(`${this.serverName}/api/hospital/create`,details);
  }
  // Login(details: any): Observable<any> {
  //   //complete this function
  // }
  // registerUser(details: any): Observable<any> {
  //   //complete this function
  // }



}
