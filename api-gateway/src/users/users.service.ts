import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(@Inject('USERS_SERVICE') private readonly client: ClientProxy) {}

  async createUser(payload: { email: string; name: string }) {
    return firstValueFrom(this.client.send({ cmd: 'create_user' }, payload));
  }
}
