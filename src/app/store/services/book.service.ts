import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({

    providedIn: 'root'

})

export class BookService {
    private url = "http://localhost:8000/book";
    constructor(private httpClient: HttpClient) { }

    getListLowQuantity(){
        return this.httpClient.get(this.url + "/listLowQuantity");
    }

    filterBook(filter : any){
        return this.httpClient.get(this.url + "/filter?" + filter);
    }

}