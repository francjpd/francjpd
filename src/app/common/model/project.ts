import Technology from './technology';

export default  class Project {
    title:string;
    client:string;
    since:Date;
    until:Date;
    desc:string;
    technologies:Array<Technology>
}