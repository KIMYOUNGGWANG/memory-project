import { MutationOutput } from 'src/common/core.entity';
export declare class LoginInput {
    type: 'kakao' | 'naver';
    idx: number;
}
export declare class LoginOutput extends MutationOutput {
    accessToken?: string;
    refreshToken?: string;
}
