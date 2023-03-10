import { Feedback } from "../entities/feedback.entity";
declare const CreateFeedBackDto_base: import("@nestjs/common").Type<Pick<Feedback, "model_id" | "model_type" | "positive" | "negative">>;
export declare class CreateFeedBackDto extends CreateFeedBackDto_base {
}
declare const UpdateFeedBackDto_base: import("@nestjs/common").Type<Partial<CreateFeedBackDto>>;
export declare class UpdateFeedBackDto extends UpdateFeedBackDto_base {
}
export {};
