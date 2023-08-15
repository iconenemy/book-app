export type RoleType = 'guest' | 'admin' | 'manager' | null;

export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    role?: RoleType;
}

export interface ISignInRes {
    tokens: ITokens
    user: IUser
}

export interface ISignInReq {
    email: string;
    password: string;
}

export interface ISignUpReq {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role?: RoleType
}

export interface ISignUpRes {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    role: RoleType;
}

export interface ITokens {
    access_token: string;
    refresh_token: string;
}

export interface IRefreshRes {
    tokens: ITokens
    user: {
        id: string;
        role: RoleType,
        email: string;
    }
}


export interface IError {
    error: string
}

export interface IAuthState {
    user: IUser;
    tokens: ITokens
    errors: IError[]
    loading: boolean;
    is_auth: boolean;
}

