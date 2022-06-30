import { Injectable } from "@nestjs/common";
import { PersonalRecords } from "./personal-records.model";


@Injectable()
export class PersonalRecordsService {
    personalRecords: PersonalRecords[] = [];

    addNewPersonalRecord(exerciseName: string, repMax: number, weight: number) {
        return {exerciseName, repMax, weight};
        
    } 

}