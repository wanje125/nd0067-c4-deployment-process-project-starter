import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../users/models/User'
import sequelize  from '../../../../sequelize'
// sequelize에서 데이터 모델은 2가지 방법으로 설정 가능하다
// 1. sequelize.define을 사용
// 2. extends Model 사용

// 아래는 sequelize-typescript를 사용해서 매우 편하다. 이렇게 하면 모델을 매우 쉽게 생성가능하다.
@Table({
    modelName: 'FeedItem',
    tableName: 'FeedItem'
})
export class FeedItem extends Model<FeedItem> {
  @Column
  public caption!: string;

  @Column
  public url!: string;

  @Column
  public description!: string;
    
  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();

  
  @ForeignKey(() => User)
  @Column
  public userId!: number;

  @BelongsTo(() => User)
  user: User
}

// FeedItem instance를 new로 생성하면 여러가지 shortcut이 가능하다.
// build 함수로 해당 instance를 생성하고 save함수로 데이터베이스에 해당 instance를 저장할 수 있고
// create함수는 build와 save함수 두가지의 기능을 가진다. 객체의 특정값을 변경하려면 update를 사용한다.
/*const jane = await User.create({ name: "Jane" });
jane.favoriteColor = "blue"
await jane.update({ name: "Ada" })
await jane.save()*/
