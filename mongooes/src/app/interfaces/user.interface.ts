interface Iuser{
    firstName:string,
    lastName:string,
    email:string,
    password:string ,
    role: 'user'|'admin',
    age:number
}

export default Iuser