export class Transaction {

    constructor(public ProfileName:string, public TransactionDate:string, public transactionAmount:string,
        public transactionNarrative:string, public transactionDescription:string, public transactionID:string,
        public transactionType:number, public walletReference:string){}
}
