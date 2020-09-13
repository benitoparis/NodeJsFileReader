import fs from 'fs';

type MatchData = [Date, string, string, number, number, String, string];

export class HtmlReport {

    html = '';

    constructor(
        private dataSet: MatchData[]
    ){
        //console.log('this.dataSet', this.dataSet);
    }

    generateHtml(): void {

        this.html = `<table>`;

        this.dataSet.forEach(row => {
            this.html += `<tr>
            <td>${row[0]}</td>
            <td>${row[1]}</td>
            <td>${row[2]}</td>
            <td>${row[3]}</td>
            <td>${row[4]}</td>
            <td>${row[5]}</td>
            
            </tr>`;
        });

        this.html +=  `</table>`;
        console.log('this.html', this.html);
    }

    // Méthode pour créer le fichier html
    createHtmlFile(): void {
        this.generateHtml();
        fs.writeFileSync('reporting.html', this.html);
    }
}