export interface Base {
    name: string,
    url: string
}

export interface MainBase {
    count: number;
    next?: any;
    previous?: any;
    results: Base[];
}
