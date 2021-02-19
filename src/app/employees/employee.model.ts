export class Employee{
    public id : number;
    public fullName : string;
    public gender : string;
    public email : string;
    public mobile : number;
    public city : string;
    public department : string;
    public hireDate : string;

    constructor(
        id : number,
        fullName : string,
        gender : string,
        email : string,
        mobile : number,
        city : string,
        department : string,
        hireDate : string
    ){
        this.id=id;
        this.fullName=fullName;
        this.gender=gender;
        this.email=email;
        this.mobile=mobile;
        this.city=city;
        this.department=department;
        this.hireDate=hireDate;
    }
}
