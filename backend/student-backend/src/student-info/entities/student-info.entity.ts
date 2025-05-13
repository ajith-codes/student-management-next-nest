import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('studentsList')
export class StudentInfo {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  age: number;
}
