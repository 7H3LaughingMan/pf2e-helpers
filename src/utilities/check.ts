import { CheckRoll } from "@7h3laughingman/pf2e-types";

const _cached: {
    checkRoll?: typeof CheckRoll;
} = {};

export function getCheckRollClass(): typeof CheckRoll {
    return (_cached.checkRoll ??= CONFIG.Dice.rolls.find((value) => value.name === "CheckRoll") as typeof CheckRoll);
}
