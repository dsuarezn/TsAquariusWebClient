import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../model/clases/User.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/users/` + id);
    }

    register(User: User) {
        return this.http.post(`${environment.apiUrl}/users`, User);
    }

    update(User: User) {
        return this.http.put(`${environment.apiUrl}/users/` + User.id, User);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + id);
    }
    create(User: User) {
        return this.http.post(`${environment.apiUrl}/users`, User);
    }


}