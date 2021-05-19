import { CoreEntity } from 'src/common/core.entity';
export declare class User extends CoreEntity {
    name: string;
    permission: string;
    hp: string;
    last_loged_in: Date;
    birth: string;
    gender: string;
    is_deleted: boolean;
    img?: string;
    kakao?: number;
    naver?: number;
}
