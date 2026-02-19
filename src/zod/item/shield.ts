import { BaseShieldType, ShieldTrait } from "@7h3laughingman/pf2e-types/module/item/shield/types.js";
import * as R from "remeda";
import * as z from "zod";

export const zBaseShieldType: z.ZodLazy<z.ZodLiteral<BaseShieldType>> = z.lazy(() => z.literal(R.keys(CONFIG.PF2E.baseShieldTypes)));

export const zShieldTrait: z.ZodLazy<z.ZodLiteral<ShieldTrait>> = z.lazy(() => z.literal(R.keys(CONFIG.PF2E.shieldTraits)));
