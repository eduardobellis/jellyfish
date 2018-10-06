export class User {
    public id: string;
    public name: string;
    public role: string;
    public actual_project: string;
    public location: string;
    public email: string;
    public contact: string;
    public coach: string;
    public pdm: string;
    public bp: string;
    public area: string;

    constructor(id: string,
        name: string,
        role: string,
        actual_project: string,
        location: string,
        email: string,
        contact: string,
        coach: string,
        pdm: string,
        bp: string,
        area: string) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.actual_project = actual_project;
        this.location = location;
        this.coach = coach;
        this.pdm = pdm;
        this.area = area;
        this.bp = bp;
        this.email = email;
        this.contact = contact;
    }
}
