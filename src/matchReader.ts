
type MatchData = [Date, string, string, number, number, String];


export class MatchReader {

    public data: MatchData[] = [];

    constructor(private matches: string[][]){

        this.data = this.matches.map((row: string[], index): MatchData => {

            return [
                new Date(row[0]),
                row[1].toString(),
                row[2].toString(),
                parseInt(row[3]),
                parseInt(row[4]),
                row[5].toString()
            ];
        })
    };  
}