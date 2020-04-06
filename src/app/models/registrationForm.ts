export interface IRegistration {
    first: string;
    last: string;
    email: string;
    regType: number;
    teamMembers:ITeamMember[];
}
export interface ITeamMember{
    first:string;
    last:string;
    email: string;
}
export interface IRentClubs{
    isRenting:boolean;
    quantity:number;
}