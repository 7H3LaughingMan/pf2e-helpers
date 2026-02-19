import * as z from "zod";
import { zRuleElementSource } from "./base.js";

export const zTokenEffectIconSource = zRuleElementSource.extend({
    key: z.literal("TokenEffectIcon"),
    value: z.string().optional()
});

export type zTokenEffectIconSource = z.infer<typeof zTokenEffectIconSource>;
