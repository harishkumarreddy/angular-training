export interface Student {
    id: number | null;
    name: string | null;
    age: number | null;
    contact: string | null;
    email: string | null;
    address: string | null;
}

export interface StudentRaw {
    data: Student;
    action: string;
}

