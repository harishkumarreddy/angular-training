import { IStudent } from "../interfaces/student";
import { StudentService } from "../services/student.service";



export class StudentModelV2 {
    data: IStudent[];

    constructor(
        private stuService: StudentService,
        data: IStudent[]
        ) {
        this.data = data;
    }

    async fetchAllStudents(): Promise<IStudent[]>{
        await this.stuService.getAll().subscribe((res: any) => {
            this.data = res;
        });

        return this.data;
    }

    getAllStudents(): IStudent[] {
        return this.data;
    }

    getStudentById(id: number): IStudent | undefined {
        return this.data.find((student: IStudent) => student.id === id);
        // return this.data.filter((student: IStudent) => student.id === id);
    //     return this.data.find((student: IStudent) => {
    //         if(student.id === id) {
    //             return student;
    //         }
    //     });
    }

}

