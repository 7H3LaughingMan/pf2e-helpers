import {
    ActorTraitsRuleElement,
    AdjustDegreeOfSuccessRuleElement,
    AdjustModifierRuleElement,
    AdjustStrikeRuleElement,
    AELikeRuleElement,
    AELikeSchema,
    AuraRuleElement,
    BaseSpeedRuleElement,
    BattleFormRuleElement,
    ChoiceSetRuleElement,
    CraftingAbilityRuleElement,
    CreatureSizeRuleElement,
    CritSpecRuleElement,
    DamageAlterationRuleElement,
    DamageDiceRuleElement,
    DexterityModifierCapRuleElement,
    EphemeralEffectRuleElement,
    FastHealingRuleElement,
    FlatModifierRuleElement,
    GrantItemRuleElement,
    ImmunityRuleElement,
    ItemAlterationRuleElement,
    ItemSourcePF2e,
    LoseHitPointsRuleElement,
    MartialProficiencyRuleElement,
    MultipleAttackPenaltyRuleElement,
    ResistanceRuleElement,
    RollNoteRuleElement,
    RollOptionRuleElement,
    RollTwiceRuleElement,
    SenseRuleElement,
    SpecialResourceRuleElement,
    SpecialStatisticRuleElement,
    StrikeRuleElement,
    SubstituteRollRuleElement,
    TempHPRuleElement,
    TokenDocumentPF2e,
    TokenEffectIconRuleElement,
    TokenImageRuleElement,
    TokenLightRuleElement,
    TokenMarkRuleElement,
    TokenNameRuleElement,
    WeaknessRuleElement
} from "@7h3laughingman/pf2e-types";
import { zChoiceSetSource } from "@zod/rules/choice-set.js";
import { zTokenMarkSource } from "@zod/rules/token-mark.js";
import { zIs } from "@zod/type-guards.js";

export function getChoiceSetSelection<T extends ItemSourcePF2e>(itemSource: T, { flag }: { flag?: string } = {}) {
    return itemSource.system.rules
        .filter((rule) => zIs(rule, zChoiceSetSource))
        .find((rule) => (flag === undefined ? true : rule.flag === flag))?.selection;
}

export function setChoiceSet<T extends ItemSourcePF2e>(
    itemSource: T,
    { flag, selection }: { flag?: string; selection: string | number | boolean }
) {
    const returnValue = foundry.utils.deepClone(itemSource);

    const choiceSet = returnValue.system.rules
        .filter((rule) => zIs(rule, zChoiceSetSource))
        .find((rule) => (flag === undefined ? true : rule.flag === flag));

    if (choiceSet) choiceSet.selection = selection;

    return returnValue;
}

export function setTokenMark<T extends ItemSourcePF2e>(
    itemSource: T,
    { slug, token }: { slug: string; token: TokenDocumentPF2e }
) {
    const returnValue = foundry.utils.deepClone(itemSource);

    const tokenMark = returnValue.system.rules
        .filter((rule) => zIs(rule, zTokenMarkSource))
        .find((rule) => rule.slug === slug);

    if (tokenMark) tokenMark.uuid = token.uuid;

    return returnValue;
}

export function isRuleElement(value: unknown, key: "ActiveEffectLike"): value is AELikeRuleElement<AELikeSchema>;
export function isRuleElement(value: unknown, key: "ActorTraits"): value is ActorTraitsRuleElement;
export function isRuleElement(value: unknown, key: "AdjustDegreeOfSuccess"): value is AdjustDegreeOfSuccessRuleElement;
export function isRuleElement(value: unknown, key: "AdjustModifier"): value is AdjustModifierRuleElement;
export function isRuleElement(value: unknown, key: "AdjustStrike"): value is AdjustStrikeRuleElement;
export function isRuleElement(value: unknown, key: "Aura"): value is AuraRuleElement;
export function isRuleElement(value: unknown, key: "BaseSpeed"): value is BaseSpeedRuleElement;
export function isRuleElement(value: unknown, key: "BattleForm"): value is BattleFormRuleElement;
export function isRuleElement(value: unknown, key: "ChoiceSet"): value is ChoiceSetRuleElement;
export function isRuleElement(value: unknown, key: "CraftingAbility"): value is CraftingAbilityRuleElement;
export function isRuleElement(value: unknown, key: "CreatureSize"): value is CreatureSizeRuleElement;
export function isRuleElement(value: unknown, key: "CriticalSpecialization"): value is CritSpecRuleElement;
export function isRuleElement(value: unknown, key: "DamageAlteration"): value is DamageAlterationRuleElement;
export function isRuleElement(value: unknown, key: "DamageDice"): value is DamageDiceRuleElement;
export function isRuleElement(value: unknown, key: "DexterityModifierCap"): value is DexterityModifierCapRuleElement;
export function isRuleElement(value: unknown, key: "EphemeralEffect"): value is EphemeralEffectRuleElement;
export function isRuleElement(value: unknown, key: "FastHealing"): value is FastHealingRuleElement;
export function isRuleElement(value: unknown, key: "FlatModifier"): value is FlatModifierRuleElement;
export function isRuleElement(value: unknown, key: "GrantItem"): value is GrantItemRuleElement;
export function isRuleElement(value: unknown, key: "Immunity"): value is ImmunityRuleElement;
export function isRuleElement(value: unknown, key: "ItemAlteration"): value is ItemAlterationRuleElement;
export function isRuleElement(value: unknown, key: "LoseHitPoints"): value is LoseHitPointsRuleElement;
export function isRuleElement(value: unknown, key: "MartialProficiency"): value is MartialProficiencyRuleElement;
export function isRuleElement(value: unknown, key: "MultipleAttackPenalty"): value is MultipleAttackPenaltyRuleElement;
export function isRuleElement(value: unknown, key: "Note"): value is RollNoteRuleElement;
export function isRuleElement(value: unknown, key: "Resistance"): value is ResistanceRuleElement;
export function isRuleElement(value: unknown, key: "RollOption"): value is RollOptionRuleElement;
export function isRuleElement(value: unknown, key: "RollTwice"): value is RollTwiceRuleElement;
export function isRuleElement(value: unknown, key: "Sense"): value is SenseRuleElement;
export function isRuleElement(value: unknown, key: "SpecialResource"): value is SpecialResourceRuleElement;
export function isRuleElement(value: unknown, key: "SpecialStatistic"): value is SpecialStatisticRuleElement;
export function isRuleElement(value: unknown, key: "Strike"): value is StrikeRuleElement;
export function isRuleElement(value: unknown, key: "SubstituteRoll"): value is SubstituteRollRuleElement;
export function isRuleElement(value: unknown, key: "TempHP"): value is TempHPRuleElement;
export function isRuleElement(value: unknown, key: "TokenEffectIcon"): value is TokenEffectIconRuleElement;
export function isRuleElement(value: unknown, key: "TokenImage"): value is TokenImageRuleElement;
export function isRuleElement(value: unknown, key: "TokenLight"): value is TokenLightRuleElement;
export function isRuleElement(value: unknown, key: "TokenMark"): value is TokenMarkRuleElement;
export function isRuleElement(value: unknown, key: "TokenName"): value is TokenNameRuleElement;
export function isRuleElement(value: unknown, key: "Weakness"): value is WeaknessRuleElement;
export function isRuleElement(value: unknown, key: string): boolean {
    return value instanceof game.pf2e.RuleElements.builtin[key];
}
