import Project from './project';

export default  class Experience {
    image:any;
    company:string;
    website:string;
    since:Date;
    until:Date
    location:string;
    companyDesc:string;
    role:string;
    roleDesc:string;
    projects:Array<Project>;
    hideme:boolean;

}