import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Idea } from './models/idea.model';

@Injectable({
  providedIn: 'root',
})
export class IdeasService {
  private _baseUrl = `${environment.baseUrl}/ideas`;

  constructor(private http: HttpClient) {}

  getIdea(id: string) {
    return this.http.get<Idea>(`${this._baseUrl}/${id}`);
  }

  listIdeas() {
    return this.http.get<Idea[]>(`${this._baseUrl}`);
  }

  upvoteIdea(id: string) {
    return this.http.patch<{ id: string }>(
      `${this._baseUrl}/${id}/upvote`,
      null
    );
  }

  downvoteIdea(id: string) {
    return this.http.patch<{ id: string }>(
      `${this._baseUrl}/${id}/downvote`,
      null
    );
  }

  deleteIdea(idea: Idea) {
    return this.http.delete<{ id: string }>(`${this._baseUrl}/${idea.id}`);
  }

  createIdea(name: string, description: string) {
    return this.http.post<Idea>(`${this._baseUrl}`, {
      name,
      description,
    });
  }

  updateIdea(id: string, name: string, description: string) {
    return this.http.put<Idea>(`${this._baseUrl}/${id}`, {
      name,
      description,
    });
  }
}
