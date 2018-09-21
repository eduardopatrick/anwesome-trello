export class Card {
    public id: number;
    public name: string;
    public boardId: number;
    public order: number;

    constructor(values: Object = {}) { Object.assign(this, values); }
}
