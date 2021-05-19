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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const core_entity_1 = require("../../common/core.entity");
let User = class User extends core_entity_1.CoreEntity {
};
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "permission", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "hp", void 0);
__decorate([
    graphql_1.Field(() => Date),
    typeorm_1.Column(),
    __metadata("design:type", Date)
], User.prototype, "last_loged_in", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "birth", void 0);
__decorate([
    graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    graphql_1.Field(() => Boolean),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], User.prototype, "is_deleted", void 0);
__decorate([
    graphql_1.Field(() => String, { nullable: true, defaultValue: '' }),
    typeorm_1.Column({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "img", void 0);
__decorate([
    graphql_1.Field(() => Number, { nullable: true, defaultValue: 0 }),
    typeorm_1.Column({ default: 0 }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], User.prototype, "kakao", void 0);
__decorate([
    graphql_1.Field(() => Number, { nullable: true, defaultValue: 0 }),
    typeorm_1.Column({ default: 0 }),
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], User.prototype, "naver", void 0);
User = __decorate([
    graphql_1.InputType({ isAbstract: true }),
    graphql_1.ObjectType(),
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map