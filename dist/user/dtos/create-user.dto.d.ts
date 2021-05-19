import { User } from '../entities/user.entity';
declare const CreateUserDto_base: import("@nestjs/common").Type<Omit<User, "no" | "img" | "is_deleted" | "last_loged_in" | "created_at" | "permission">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
