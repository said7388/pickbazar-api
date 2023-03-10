import { CoreEntity } from "src/common/entities/core.entity";
export declare class Feedback extends CoreEntity {
    user_id: string;
    model_type: string;
    model_id: string;
    positive?: boolean;
    negative?: boolean;
}
