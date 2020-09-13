type MatchData = [Date, string, string, number, number, String];

export class TeamWinAnalysis {

    constructor(
        private matchesData : MatchData[],
        private teamName: string
    ){}


    getMatchWin(): number {

        let win = 0;
        this.matchesData.forEach((match: MatchData) => {
            if (
                (match[1] === this.teamName && match[5]=== 'H') || (match[2] === this.teamName && match[5]=== 'A'))
            {
                win++;
            }
        });

        return win;
    }

    getMatchLost(): number {

        let lost = 0;
        this.matchesData.forEach((match: MatchData) => {
            if (
                (match[1] === this.teamName && match[5]=== 'A') || (match[2] === this.teamName && match[5]=== 'H'))
            {
                lost++;
            }
        });

        return lost;
    }


}