import { NPCAttackActionType, NPCAttackTrait } from "@7h3laughingman/pf2e-types/module/item/melee/types.js";
import * as R from "remeda";
import * as z from "zod";

export const zNPCAttackTrait: z.ZodLazy<z.ZodLiteral<NPCAttackTrait>> = z.lazy(() => z.literal(R.keys(CONFIG.PF2E.npcAttackTraits)));

export const zNPCAttackActionType: z.ZodLiteral<NPCAttackActionType> = z.literal(["strike", "area-fire", "auto-fire"]);
