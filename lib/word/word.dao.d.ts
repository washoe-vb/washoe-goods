export declare enum Answer {
    IDoNotRemember = 0,
    IRemember = 1,
    IRememberVeryWell = 2
}
export declare enum WordStatus {
    Idle = 0,
    Pushed = 1,
    Deleted = -1
}
export declare class WordData {
    word: string;
    definition?: string;
    example?: string;
}
declare class History {
    pushedAt: Array<number>;
    answeredAt: Array<number>;
    answers: Array<Answer>;
}
export declare class Word extends WordData {
    stage: number;
    status: WordStatus;
    notifyAt: number;
    user: string;
    history: History;
}
export {};
