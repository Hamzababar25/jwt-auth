import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';


const fakeUsers=[
  {
    id:1,
    username:'anson',
    password:'password'
  },
  {
    id:2,
    username:'one',
    password:'password123',
  }
]
@Injectable()
export class AuthService {
constructor(private jwtService: JwtService){

}
  validateUser(authpayloadDto:AuthPayloadDto){
    const findUser=fakeUsers.find((user) => user.username === authpayloadDto.username);
if(!findUser){
  return null
}
if(authpayloadDto.password ===findUser.password ){
  const payload = { username: findUser.username, sub: findUser.id };
      return this.jwtService.sign(payload);
}
  }

}
