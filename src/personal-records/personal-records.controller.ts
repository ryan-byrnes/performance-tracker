import { Controller, Post, Body } from "@nestjs/common";
import { PersonalRecordsService } from "./personal-records.service";

@Controller('personal-records')
export class PersonalRecordsController {
    constructor(private readonly personalRecordsService: PersonalRecordsService) {}

    @Post()
    addPersonalRecord(
        @Body('exerciseName') exerciseName: string,
        @Body('repMax') repMax: number,
        @Body('weight') weight: number
        ): any {
        return this.personalRecordsService.addNewPersonalRecord(exerciseName, repMax, weight);
    }
}