import { User } from '../entities/user.entity';
declare const CreateUserDto_base: import("@nestjs/common").Type<Omit<User, "no" | "created_at" | "permission" | "last_loged_in" | "is_deleted" | "img" | "kakao" | "naver">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
