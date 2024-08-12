import { BadRequestException, ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateAuthDto } from './dto/createAuthDto';
import { Auth } from '../schemas/Auth.schema';
import { TokenService } from '../utils/jwt.service';
import { LoginUserDto } from './dto/loginAuthDto';
import { STATUS_CODES } from 'http';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private readonly authModel: Model<Auth>,
    private readonly tokenService: TokenService,
  ) { }

  async create(dto: CreateAuthDto) {
    const { name, email, password } = dto;

    const emailExist = await this.authModel.findOne({ email });

    if (emailExist) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.authModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return {
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
      data: user,
    };
  }

  async loginUser(dto: LoginUserDto) {
    const { email, password } = dto;

    const user = await this.authModel.findOne({ email: email.toLowerCase() });

    if (!user) throw new BadRequestException('invalid email or password');

    const isPasswordValid = await bcrypt.compare(password, user);

    if (!isPasswordValid)
      throw new BadRequestException('invalid password or email');

    const token = await this.tokenService.createTokensForUser(user.id, email)

    return {

      statusCode: HttpStatus.OK,
      message: 'user login successful',
      data: user,
      token,
    }
  }
}
