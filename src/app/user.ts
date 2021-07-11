import { Posts } from "./posts";
import { Tasks } from "./tasks";

export class User {
    constructor(public _id?: number, public name?: string, public email?: string, 
        public street?: string, public city?: string, 
        public zipcode?: number, public tasks?: Tasks[], public posts?: Posts[]){}
}
 