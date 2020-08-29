import fs from 'fs';

export class CsvFileReader {

    data: string[][] = [];

    constructor(
        private fileName: string
    ){}

    // Méthode pour lire un fichier css présent sur le serveur
    read(): void {
        this.data = fs.readFileSync(this.fileName, {encoding: 'utf-8'})
        .split('\n')
        .map((match:string): string[] => {
            return match.split(',');
        });

        this.data.pop()
    }

}