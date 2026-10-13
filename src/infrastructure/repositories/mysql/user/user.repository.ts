import { LoginUserRequestDTO } from "../../../../application/dto/user/login.user.request.dto";
import { RegisterUserRequestDTO } from "../../../../application/dto/user/register.user,request.dto";
import { Database } from "../../../database/mysql";
import { AppError } from "../../../../application/errors/app-error";
import { UserRepository } from "../../../../application/interface/repositories/user/i-user.repository";
import { User } from "../../../../domain/entities/user/user.entity";

const pool = Database.getInstance().getPool();


export class MySQLUserRepository implements UserRepository{


  async create(data: RegisterUserRequestDTO): Promise<User> {
    
    const [result] : any = await pool.query('insert into users (name,email,password) values (?,?,?)',[data.name,data.email,data.password]);

    if(!result)throw new AppError("Can not create User",400);

    return new User(result.insertId,data.name,data.email,null);

  }


  async findByEmail(email: string): Promise<User | null> {
    
      const [rows] : any = await pool.query('select * from users where email = ?',[email]);

      if(rows.length === 0){
        return null;
      }

      const row = rows[0];

      return new User(row.id,row.name,row.email,row.password);

  }

  async findById(id: number): Promise<User | null> {
    
      const [rows] : any = await pool.query('select * from users where id = ?',[id]);

      if(rows.length === 0){
        return null;
      }

      const row = rows[0];

      return new User(row.id,row.name,row.email,null);

  }


}