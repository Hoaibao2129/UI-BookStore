import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root'

})

export class RevenueService {
    private url = 'http://localhost:8000/revenue/';
    constructor(private httpClient: HttpClient) { }
    getRevenueDay() {
        return this.httpClient.get(this.url + "/revenueDay");
    }

    getRevenueMonth(){
        return this.httpClient.get(this.url + "/revenueMonth")
    }

}