import { JwtService } from '@nestjs/jwt';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { access } from 'fs';

@Injectable()
export class TokenService {
    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
    ) { }

    async generateToken(userId: string, email: string, ttl: string) {
        return this.jwtService.signAsync(
            {
                id: userId,
                email,
            },
            {
                expiresIn: ttl,
            }
        );
    }


    async createTokensForUser(
        userId: string,
        email: string,
    ): Promise<{ accessToken: string }> {
        try {

            const accessToken = await this.generateToken(userId, email, '1d');

            return { accessToken };
        } catch (err) {

            console.error('Error generating token:', err);
            throw new InternalServerErrorException('Failed to generate access token');
        }
    }
}
