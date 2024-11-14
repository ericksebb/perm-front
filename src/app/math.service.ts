import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  private baseUrl = 'http://localhost:3000/math';

  constructor(private http: HttpClient) {}

  getFactorial(number: number) {
    return this.http.get(`${this.baseUrl}/factorial/${number}`);
  }

  getLinearPermutation(n: number, r: number) {
    return this.http.get(`${this.baseUrl}/linear-permutation`, { params: { n: n.toString(), r: r.toString() } });
  }

  getCircularPermutation(number: number) {
    return this.http.get(`${this.baseUrl}/circular-permutation/${number}`);
  }

  getRepetitionPermutation(n: number, counts: number[]) {
    const countsStr = counts.join(',');
    return this.http.get(`${this.baseUrl}/repetition-permutation`, { params: { n: n.toString(), counts: countsStr } });
  }
}
