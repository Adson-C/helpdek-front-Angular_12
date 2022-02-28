import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(creds: Credenciais) {

  }
}
