export declare enum Answer {
    IDoNotRemember = 0,
    IRemember = 1,
    IRememberVeryWell = 2
}
export declare enum WordStatus {
    Idle = 0,
    Pushed = 1
}
export declare class DictionaryEntry {
    word: string;
    definition?: string;
    example?: string;
}
declare class History {
    pushedAt: Array<Date>;
    answeredAt: Array<Date>;
    answers: Array<Answer>;
}
export declare class Word extends DictionaryEntry {
    stage: number;
    status: WordStatus;
    reviewAt: Date;
    user: string;
    history: History;
    deletedAt?: Date;
}
export {};
