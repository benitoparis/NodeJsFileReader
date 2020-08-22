import {CsvFileReader} from './csvFileReader';


const reader = new CsvFileReader('original.csv');
reader.read();
console.log('reader data', reader.data);