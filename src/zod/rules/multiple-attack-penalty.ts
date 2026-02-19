import * as z from "zod";
import { zRuleElementSource, zRuleValue } from "./base.js";

export const zMultipleAttackPenaltySource = zRuleElementSource.extend({
    key: z.literal("MultipleAttackPenalty"),
    selector: z.string().optional(),
    value: zRuleValue.optional()
});

export type zMultipleAttackPenaltySource = z.infer<typeof zMultipleAttackPenaltySource>;
