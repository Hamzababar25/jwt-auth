import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  

  @Post('login')
  login(@Body()authpayload:AuthPayloadDto){
  const user=this.authService.validateUser(authpayload)
  if(!user){ throw new HttpException('invalid',401)
  }
return user
  }
}
