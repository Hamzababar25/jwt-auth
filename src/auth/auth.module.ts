import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abc123',
      signOptions: { expiresIn: '120s' }, // Or you can use a number like 120
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}