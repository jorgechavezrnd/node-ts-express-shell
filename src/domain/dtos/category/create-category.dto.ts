export class CreateCategoryDto {

  private constructor(
    public readonly name: string,
    public readonly available: boolean,
  ) {}

  static create(object: { [key: string]: any } = {}): [undefined, CreateCategoryDto] | [string, undefined] {

    const { name, available = false } = object;
    let availableBoolean = available;

    if (!name) return ['Missing name', undefined];
    if (typeof available !== 'boolean') {
      availableBoolean = (available === 'true')
    }

    return [undefined, new CreateCategoryDto(name, availableBoolean)];

  }

}
