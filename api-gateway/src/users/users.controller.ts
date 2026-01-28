import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';

class CreateUserDto {
  @ApiProperty({ example: 'maverick@example.com' })
  email!: string;
  @ApiProperty({ example: 'Maverick Boby' })
  name!: string;
}

class CreateUserResponseDto {
  @ApiProperty({ example: '08f52eff-af26-4b12-83f9-73da0c8e6bad' })
  id!: string;
  @ApiProperty({ example: 'maverick@example.com' })
  email!: string;
  @ApiProperty({ example: 'Maverick Boby' })
  name!: string;
}

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({ type: CreateUserResponseDto })
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
