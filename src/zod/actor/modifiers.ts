import { ModifierType } from "@7h3laughingman/pf2e-types/module/actor/modifiers.js";
import * as z from "zod";

export const zModifierType: z.ZodLiteral<ModifierType> = z.literal(["ability", "circumstance", "item", "potency", "proficiency", "status", "untyped"]);
