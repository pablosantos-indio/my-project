import { Controller, Post, Body } from '@nestjs/common';
import { TxtWriteService } from './txt-write.service';
import { BodyTxtWrite } from './body-txt-write';

@Controller('txt-write')
export class TxtWriteController {
    constructor(private readonly txtService: TxtWriteService) {}

    @Post('generate')
        async generateTxtFile(@Body() body: BodyTxtWrite,): Promise<string> {
            const serviceResponse = await this.txtService.generateTxt(body.content, body.fileName);
            return serviceResponse;
        }
}
