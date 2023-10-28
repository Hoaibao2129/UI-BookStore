import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff} from "../../models/staffModel"

@Injectable({

    providedIn: 'root'

})

export class StaffService {
    private url = "http://localhost:8000/staff";
    constructor(
        private httpClient: HttpClient,
    ) { }

   getStaffs(){
    return this.httpClient.get(this.url);
   }

   insertStaff(staff : Staff) {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(staff);
    return this.httpClient.post(this.url,body,{'headers':headers});
   }

}