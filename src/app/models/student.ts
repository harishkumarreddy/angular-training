export class StudentModel {
    id: number | null;
    name: string | null;
    age: number | null;
    contact: string | null;
    email: string | null;
    address: string | null;

    constructor(
        id: number | null,
        name: string | null,
        age: number | null,
        contact: string | null,
        email: string | null,
        address: string | null
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.contact = contact;
        this.email = email;
        this.address = address;
    }

    // setters
    setId(id: number | null) {
        this.id = id;
    }

    setName(name: string | null) {
        this.name = name;
    }

    setAge(age: number | null) {
        this.age = age;
    }

    setContact(contact: string | null) {
        this.contact = contact;
    }

    setEmail(email: string | null) {
        this.email = email;
    }

    setAddress(address: string | null) {
        this.address = address;
    }

    // getters
    getId(): number | null {
        return this.id;
    }

    getName(): string | null {
        return this.name;
    }

    getAge(): number | null {
        return this.age;
    }

    getContact(): string | null {
        return this.contact;
    }

    getEmail(): string | null {
        return this.email;
    }

    getAddress(): string | null {
        return this.address;
    }

    // methods
    toString(): string {
        return `StudentModel: { id: ${this.id}, name: ${this.name}, age: ${this.age}, contact: ${this.contact}, email: ${this.email}, address: ${this.address} }`;
    }

    toObject(): object {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
            contact: this.contact,
            email: this.email,
            address: this.address
        };
    }

    toJson(): string {
        return JSON.stringify(this.toObject());
    }
}
