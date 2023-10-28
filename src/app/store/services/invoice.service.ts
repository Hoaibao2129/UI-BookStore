import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root'

})

export class InvoiceService {
    private url = "http://localhost:8000/invoice/";
    constructor(private httpClient: HttpClient) { }

    postRevoive(data: any) {
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(data);
        return this.httpClient.post(this.url, body, { 'headers': headers });
    }
}