export class Activity {
    public id: number;
    public title: string;
    public description: string;
    public cardId: number;

    constructor(values: Object = {}) {Object.assign(this, values); }
}
