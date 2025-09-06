import { regularExps } from '../../../config';

export class LoginUserDto {

  private constructor(
    public email: string,
    public password: string,
  ) {}

  static create(object: { [key: string]: any } = {}): [undefined, LoginUserDto] | [string, undefined] {
    const { email, password } = object;

    if (!email) return ['Missing email', undefined];
    if (!regularExps.email.test(email)) return ['Email is not valid', undefined];
    if (!password) return ['Missing password', undefined];
    if (password.length < 6) return ['Password too short', undefined];

    return [undefined, new LoginUserDto(email, password)];
  }

}
