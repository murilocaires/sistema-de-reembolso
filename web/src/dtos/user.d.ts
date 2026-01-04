type UserAPIRole = "employee" | "manager"


type UserAPIResponse = {
    token: string
    user:{
        email:string,
        id:string,
        name:string,
        role: UserAPIRole
    }
}