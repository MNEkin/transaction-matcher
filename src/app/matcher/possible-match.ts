import { Transaction } from "./transaction";

export class PossibleMatch {

    constructor(public t1:Transaction, public t2:Transaction, public matchRate:number){}
}
