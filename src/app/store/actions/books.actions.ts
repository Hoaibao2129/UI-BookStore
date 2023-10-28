import { createAction, props } from '@ngrx/store';

export const BooksAction = {
    onLoadBooks : '[BOOK] load all book',
    onLoadBookById : '[BOOK] load book by ID',
    onCreateBook : "[BOOK] create book"
}

export const onLoadBooks = createAction(BooksAction.onLoadBooks);
export const onLoadBookById = createAction(BooksAction.onLoadBookById);
export const onCreateBook = createAction(BooksAction.onCreateBook , props<any>());