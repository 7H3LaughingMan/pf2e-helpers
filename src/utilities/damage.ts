import { DamageInstance, DamageRoll } from "@7h3laughingman/pf2e-types";

const _cached: {
    damageRoll?: typeof DamageRoll;
    damageInstance?: typeof DamageInstance;
} = {};

export function getDamageRollClass(): typeof DamageRoll {
    return (_cached.damageRoll ??= CONFIG.Dice.rolls.find((value) => value.name === "DamageRoll") as typeof DamageRoll);
}

export function getDamageInstanceClass(): typeof DamageInstance {
    return (_cached.damageInstance ??= CONFIG.Dice.rolls.find((value) => value.name === "DamageInstance") as typeof DamageInstance);
}
