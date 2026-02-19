import * as z from "zod";
import { zRuleElementSource } from "./base.js";

export const zBattleFormSource = zRuleElementSource.extend({
    key: z.literal("BattleForm")
});

export type zBattleFormSource = z.infer<typeof zBattleFormSource>;
