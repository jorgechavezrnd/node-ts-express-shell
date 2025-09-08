import { Validators } from '../../../config';

export class CreateProductDto {

  private constructor(
    public readonly name: string,
    public readonly available: boolean,
    public readonly price: number,
    public readonly description: string,
    public readonly user: string, // ID
    public readonly category: string, // ID
  ) {}

  static create(props: { [key: string]: any } = {}): [undefined, CreateProductDto] | [string, undefined] {

    const {
      name,
      available,
      price,
      description,
      user,
      category,
    } = props;

    if (!name) return ['Missing name', undefined];

    if (!user) return ['Missing user', undefined];
    if (!Validators.isMongoID(user)) return ['Invalid User ID', undefined];

    if (!category) return ['Missing category', undefined];
    if (!Validators.isMongoID(category)) return ['Invalid Category ID', undefined];

    return [
      undefined,
      new CreateProductDto(
        name,
        !!available,
        price,
        description,
        user,
        category,
      ),
    ];

  }

}
