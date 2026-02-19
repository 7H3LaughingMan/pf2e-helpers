import * as z from "zod";
import { zRawPredicate } from "../system/predication.js";
import { zRuleElementSource, zRuleValue } from "./base.js";

export const zSubstituteRollSource = zRuleElementSource.extend({
    key: z.literal("SubstituteRoll"),
    selector: z.string().optional(),
    value: zRuleValue.optional(),
    required: z.boolean().optional(),
    EffectType: z.literal(["fortune", "misfortune"]).optional(),
    removeAfterRoll: z.union([z.literal("if-enabled"), z.boolean(), zRawPredicate]).optional()
});

export type zSubstituteRollSource = z.infer<typeof zSubstituteRollSource>;
