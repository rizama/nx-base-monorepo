import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getData() {
        return this.appService.getData();
    }

    @Get('/producer')
    producer(): void {
        this.appService.producer();
    }

    @Get('/consumer')
    consumer(): void {
        this.appService.consumer();
    }
}
