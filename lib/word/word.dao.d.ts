declare enum Answer {
    IDoNotRemember = 0,
    IRemember = 1,
    IRememberVeryWell = 2
}
declare enum WordStatus {
    Idle = 0,
    Pushed = 1,
    Deleted = -1
}
export declare class WordData {
    word: string;
    definition?: string;
    example?: string;
}
export declare class Word extends WordData {
    stage: number;
    status: WordStatus;
    createdAt: number;
    notifyAt: number;
    user: string;
    history: {
        pushedAt: Array<number>;
        answeredAt: Array<number>;
        answers: Array<Answer>;
    };
}
export {};
