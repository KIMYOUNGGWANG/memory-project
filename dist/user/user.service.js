"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(user) {
        this.user = user;
    }
    createUser(createUserDto) {
        const today = new Date();
        const newUser = this.user.create({
            name: createUserDto.name,
            hp: createUserDto.hp,
            gender: createUserDto.gender,
            birth: createUserDto.birth,
            permission: 'N',
            created_at: today,
            last_loged_in: today,
            is_deleted: false,
        });
        return this.user.save(newUser);
    }
    async login({ type, idx }) {
        try {
            const user = await (type === 'kakao'
                ? this.user.findOne({ kakao: idx })
                : this.user.findOne({ naver: idx }));
            if (!user) {
                return {
                    ok: false,
                    error: 'User not found',
                };
            }
            return {
                ok: true,
                accessToken: jsonwebtoken_1.default.sign({ no: user.no, type: 'access' }, 'ddd'),
                refreshToken: jsonwebtoken_1.default.sign({ no: user.no, type: 'refresh' }, 'ddd'),
            };
        }
        catch (error) {
            return {
                ok: false,
                error,
            };
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map