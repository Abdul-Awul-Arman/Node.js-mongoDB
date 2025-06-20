
export interface Iaddress{
 
        city:string,
        street:string,
        zip:number
    
}
export interface Iuser{
    firstName:string,
    lastName:string,
    email:string,
    password:string ,
    role: 'user'|'admin',
    age:number,
    address:Iaddress
}

