import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Content } from './content';

@Injectable()
export class TxtWriteService {

 async generateTxt(content: Content, fileName: string): Promise<string> {
   
    try {
        const log = `{
                "timestamp": "${content.timestamp}",
                "type": "${content.type}",
                "details": "${content.details}"
                }`;
   
        await fs.promises.writeFile(fileName, log);
   
        return `File ${fileName} created successfully!`;
   
    } catch (error) {
        throw new Error(`Error creating file: ${error.message}`);
    }
 }
}
