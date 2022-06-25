import { Controller, Get } from "@nestjs/common";

@Controller('personalRecords')
export class PersonalRecordsController {

    @Get()
    getPersonalRecords(): any {

    }
}