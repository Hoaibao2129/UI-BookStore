import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/models/bookModel';

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

    getListBook(){
        return this.httpClient.get(this.url)
    }

    insertBook(book : Book){
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(book);
        return this.httpClient.post(this.url, body, { 'headers': headers });
    }

}