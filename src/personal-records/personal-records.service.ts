import { Injectable } from "@nestjs/common";
import { PersonalRecords } from "./personal-records.model";


@Injectable()
export class PersonalRecordsService {
    personalRecords: PersonalRecords[] = [];

}