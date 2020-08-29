import fs from 'fs';

type MatchData = [Date, string, string, number, number, String, string];

export class HtmlReport {

    html = '';

    constructor(
        //private dataSet: MatchData
    ){}

    generateHtml(): void {
        this.html =  `
        <div>Reporting</div>
        <div>fdfsdfdfsfd</div>
        `;
    }

    // Méthode pour créer le fichier html
    createHtmlFile(): void {
        this.generateHtml();
        fs.writeFileSync('reporting.html', this.html);
    }
}