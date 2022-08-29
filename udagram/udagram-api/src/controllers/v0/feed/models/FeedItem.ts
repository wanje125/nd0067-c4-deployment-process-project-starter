import { Table, Column, Model, CreatedAt, UpdatedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../../users/models/User'
import sequelize  from '../../../../sequelize'
// sequelize���� ������ ���� 2���� ������� ���� �����ϴ�
// 1. sequelize.define�� ���
// 2. extends Model ���

// �Ʒ��� sequelize-typescript�� ����ؼ� �ſ� ���ϴ�. �̷��� �ϸ� ���� �ſ� ���� ���������ϴ�.
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

// FeedItem instance�� new�� �����ϸ� �������� shortcut�� �����ϴ�.
// build �Լ��� �ش� instance�� �����ϰ� save�Լ��� �����ͺ��̽��� �ش� instance�� ������ �� �ְ�
// create�Լ��� build�� save�Լ� �ΰ����� ����� ������. ��ü�� Ư������ �����Ϸ��� update�� ����Ѵ�.
/*const jane = await User.create({ name: "Jane" });
jane.favoriteColor = "blue"
await jane.update({ name: "Ada" })
await jane.save()*/
