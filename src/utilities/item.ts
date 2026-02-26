import { AbilityItemPF2e, ActorPF2e, MeleePF2e, WeaponPF2e } from "@7h3laughingman/pf2e-types";
import { documentHasParent, isDocumentType } from "./foundry-helpers.js";

export function isWeapon(
    value: unknown
): value is AbilityItemPF2e<ActorPF2e> | WeaponPF2e<ActorPF2e> | MeleePF2e<ActorPF2e> {
    return isDocumentType(value, "Item") && documentHasParent(value) && value.isOfType("action", "weapon", "melee");
}
