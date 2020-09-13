import { CsvFileReader} from './csvFileReader';
import { MatchReader } from './matchReader';
import { HtmlReport } from './htmlReport';
import { TeamWinAnalysis } from './teamWinAnalysis';


console.log('avant');
const reader = new CsvFileReader('original.csv');
reader.read();
const matchReader = new MatchReader(reader.data);



const analysis = new TeamWinAnalysis(matchReader.data, 'Tottenham');
const nbWin = analysis.getMatchWin();

const nbLost = analysis.getMatchLost();
console.log('nbWin', nbWin);
console.log('nbLost', nbLost);

//const htmlReport = new HtmlReport(matchReader.data);
//htmlReport.createHtmlFile();