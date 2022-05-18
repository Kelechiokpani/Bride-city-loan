

export interface User {
    _id: string;
    email: string;
    phone: string;
    lastReset: string;
    createdAt: string;
    updatedAt: string;

}

export interface NewUserInput {
    password: string;
    email: string;
    phone: string;
}