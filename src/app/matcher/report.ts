import { PossibleMatch } from "./possible-match";

export class Report {
    constructor(public matchedRecord:number, public unmatchedRecord1:number,public unmatchedRecord2:number,
        public totalRecords1:number, public totalRecords2:number, public error:string, public possibleMatchList:PossibleMatch[]){}
}
