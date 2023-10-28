import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root'

})

export class RoleService {
    private url = "http://localhost:8000/role";
    constructor(private httpClient: HttpClient) { }

    getRoleList(){
       return this.httpClient.get(this.url + "/roleList");
    }
}