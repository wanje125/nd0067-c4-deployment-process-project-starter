import { Table, Column, Model, PrimaryKey, CreatedAt, UpdatedAt, HasMany,Unique} from 'sequelize-typescript';
import { FeedItem } from '../../feed/models/FeedItem'
import  sequelize  from '../../../../sequelize'

@Table({
    modelName:'User'
})
export class User extends Model<User> {

  @Unique
  @Column
  public email!: string;

  @Column
    public passwordHash!: string;

    @Column
    public username!: string;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();

  @HasMany(() => FeedItem)
  feeditems: FeedItem[]

  short() {
    return {
      email: this.email,
    };
  }
}
