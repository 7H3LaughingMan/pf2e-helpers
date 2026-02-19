import * as z from "zod";
import { zRuleElementSource } from "./base.js";

export const zTokenNameSource = zRuleElementSource.extend({
    key: z.literal("TokenName"),
    value: z.string().optional()
});

export type zTokenNameSource = z.infer<typeof zTokenNameSource>;
