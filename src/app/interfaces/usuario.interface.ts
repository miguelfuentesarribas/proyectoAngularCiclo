export interface Usuario {
    _id:        string;
    name:       string;
    email:      string;
    password?:   string;
    mobile?:     string;
    admin?:      boolean;
    profilePic?: string;
    __v?:        number;
}

export interface AuthResponse {
    ok: boolean;
    mensaje?: string;
    id?: string;
    name?: string;
    email?: string;
    rol?: string;
    token?: string;
    password?: string;
}
