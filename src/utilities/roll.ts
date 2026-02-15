import { Rolled } from "@7h3laughingman/foundry-types/client/dice/roll.mjs";
import { CheckRoll, DamageInstance, DamageRoll } from "@7h3laughingman/pf2e-types";
import { getDamageRollClass } from "./damage.js";

import * as R from "remeda";
import { getCheckRollClass } from "./check.js";

export function isDamageRoll(value: unknown): value is DamageRoll {
    return R.isNonNullish(value) && value instanceof getDamageRollClass();
}

export function isRolledDamageRoll(value: unknown): value is Rolled<DamageRoll> {
    return isDamageRoll(value) && value._evaluated === true;
}

export function isDamageInstance(value: unknown): value is DamageInstance {
    return R.isNonNullish(value) && value instanceof getDamageRollClass();
}

export function isRolledDamageInstance(value: unknown): value is Rolled<DamageInstance> {
    return isDamageInstance(value) && value._evaluated === true;
}

export function isCheckRoll(value: unknown): value is CheckRoll {
    return R.isNonNullish(value) && value instanceof getCheckRollClass();
}

export function isRolledCheckRoll(Value: unknown): Value is Rolled<CheckRoll> {
    return isCheckRoll(Value) && Value._evaluated === true;
}
