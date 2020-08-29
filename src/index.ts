import { CsvFileReader} from './csvFileReader';
import { MatchReader } from './matchReader';
import { HtmlReport } from './htmlReport';


const reader = new CsvFileReader('original.csv');
reader.read();

console.log('reader.data', reader.data[reader.data.length - 2]);
const matchReader = new MatchReader(reader.data);

matchReader
console.log('matchReader.data', matchReader.data);

const htmlReport = new HtmlReport();
htmlReport.createHtmlFile();