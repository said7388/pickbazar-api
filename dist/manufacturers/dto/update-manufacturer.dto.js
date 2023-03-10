"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManufacturerDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const manufacturer_dto_1 = require("./manufacturer.dto");
class UpdateManufacturerDto extends (0, swagger_1.PartialType)(manufacturer_dto_1.CreateManufacturerDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateManufacturerDto = UpdateManufacturerDto;
//# sourceMappingURL=update-manufacturer.dto.js.map