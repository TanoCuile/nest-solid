import { Module } from '@nestjs/common';
import { UserService } from './services/user/user.service';
import { DataBaseModule } from '../data-base/data-base.module';

@Module({
  imports: [DataBaseModule],
  providers: [{ useClass: UserService, provide: 'UserServiceInterface' }],
  exports: ['UserServiceInterface'],
})
export class UserModule {}
