export class Idea {
  id: string;
  name: string;
  description: string;
  votea: number;

  constructor(id: string, name: string, description: string, votea: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.votea = votea;
  }
}
