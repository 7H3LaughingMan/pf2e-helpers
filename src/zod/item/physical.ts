import {
    BaseMaterial,
    CoinDenomination,
    Currency,
    Grade,
    PhysicalItemType,
    PreciousMaterialGrade,
    PreciousMaterialType
} from "@7h3laughingman/pf2e-types/module/item/physical/types.js";
import * as R from "remeda";
import * as z from "zod";
import { zArmorTrait } from "./armor.js";
import { zConsumableTrait } from "./consumable.js";
import { zEquipmentTrait } from "./equipment.js";
import { zShieldTrait } from "./shield.js";
import { zWeaponTrait } from "./weapon.js";

export const zBaseMaterialType = z.literal(["bone", "cloth", "glass", "leather", "paper", "rope", "steel", "stone", "wood"]);

export const zBaseMaterialThickness = z.literal(["thin", "standard", "structure"]);

export const zBaseMaterial: z.ZodType<BaseMaterial, BaseMaterial> = z.strictObject({
    type: zBaseMaterialType,
    thickness: zBaseMaterialThickness
});

export const zCoinDenomination: z.ZodLiteral<CoinDenomination> = z.literal(["pp", "gp", "sp", "cp"]);

export const zCurrency: z.ZodLazy<z.ZodLiteral<Currency>> = z.lazy(() => z.literal(R.keys(CONFIG.PF2E.currencies)));

export const zPhysicalItemTrait: z.ZodUnion<[typeof zArmorTrait, typeof zConsumableTrait, typeof zEquipmentTrait, typeof zShieldTrait, typeof zWeaponTrait]> =
    z.union([zArmorTrait, zConsumableTrait, zEquipmentTrait, zShieldTrait, zWeaponTrait]);

export const zPhysicalItemType: z.ZodLiteral<PhysicalItemType> = z.literal([
    "ammo",
    "armor",
    "backpack",
    "book",
    "consumable",
    "equipment",
    "shield",
    "treasure",
    "weapon"
]);

export const zPreciousMaterialType: z.ZodLazy<z.ZodLiteral<PreciousMaterialType>> = z.lazy(() => z.literal(R.keys(CONFIG.PF2E.preciousMaterials)));

export const zPreciousMaterialGrade: z.ZodLazy<z.ZodLiteral<PreciousMaterialGrade>> = z.lazy(() => z.literal(R.keys(CONFIG.PF2E.preciousMaterialGrades)));

export const zGrade: z.ZodLazy<z.ZodLiteral<Grade>> = z.lazy(() => z.literal(R.keys(CONFIG.PF2E.grades)));
