"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCouponDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const coupon_dto_1 = require("./coupon.dto");
class UpdateCouponDto extends (0, swagger_1.PartialType)(coupon_dto_1.CreateCouponDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCouponDto = UpdateCouponDto;
//# sourceMappingURL=update-coupon.dto.js.map