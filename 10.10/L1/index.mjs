// Przygotuj funkcję generatora w Javascript. Funkcja ma zwrócić w pętli 20 losowo wygenerowanych liczb z zakresu -420 do 2137
// Wywołaj strumieniowy zapis wywołań funkcji do pliku o nazwie random-<timestamp>.txt, gdzie timestamp to czas wygenerowania pliku
//Rozczka code
import { createWriteStream } from 'fs';
import {Readable} from 'stream';

function* fun(count){
    for(let i = 0; i<=count; i++){
        let rand = Math.floor(Math.random() * (2137 - -420) + -420);

        yield rand;
    }
}
const timeStamp = Date.now().toString();

const readable = Readable.from(fun(20));
const writable = createWriteStream(`random-${timeStamp}.txt`)


readable.on('data', async (chunk)=>{
    writable.write(`${chunk}\n`);
})
