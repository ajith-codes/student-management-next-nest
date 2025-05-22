import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

@Entity('studentsList')
export class StudentInfo {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  full_name: string;

  @Column()
  roll_number: number;

  @Column()
  class_name: string;

  @Column()
  age: number;

  @Column()
  contact_number: string;

  @Column()
  email: string;

  @Column()
  registered_at: Date;
}
