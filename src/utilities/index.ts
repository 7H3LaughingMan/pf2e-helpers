import {
    ActiveEffectPF2e,
    ActorPF2e,
    AmbientLightDocumentPF2e,
    AmbientLightPF2e,
    ChatMessagePF2e,
    CombatantPF2e,
    EncounterPF2e,
    ItemPF2e,
    MacroPF2e,
    MeasuredTemplateDocumentPF2e,
    MeasuredTemplatePF2e,
    RegionBehaviorPF2e,
    RegionDocumentPF2e,
    RegionPF2e,
    ScenePF2e,
    TileDocumentPF2e,
    TokenDocumentPF2e,
    TokenPF2e,
    UserPF2e
} from "@7h3laughingman/pf2e-types";

declare module "@7h3laughingman/foundry-helpers/utilities" {
    function isPlaceableObject(value: unknown, embeddedName: "AmbientLight"): value is AmbientLightPF2e;
    function isPlaceableObject(value: unknown, embeddedName: "MeasuredTemplate"): value is MeasuredTemplatePF2e;
    function isPlaceableObject(value: unknown, embeddedName: "Region"): value is RegionPF2e;
    function isPlaceableObject(value: unknown, embeddedName: "Token"): value is TokenPF2e;
    function placeableObjectHasScene(value: Maybe<AmbientLightPF2e>): value is AmbientLightPF2e<AmbientLightDocumentPF2e<ScenePF2e>>;
    function placeableObjectHasScene(value: Maybe<MeasuredTemplatePF2e>): value is MeasuredTemplatePF2e<MeasuredTemplateDocumentPF2e<ScenePF2e>>;
    function placeableObjectHasScene(value: Maybe<RegionPF2e>): value is RegionPF2e<RegionDocumentPF2e<ScenePF2e>>;
    function placeableObjectHasScene(value: Maybe<TokenPF2e>): value is TokenPF2e<TokenDocumentPF2e<ScenePF2e>>;

    function isDocumentType(value: unknown, documentName: "ActiveEffect"): value is ActiveEffectPF2e<ActorPF2e | ItemPF2e | null>;
    function isDocumentType(value: unknown, documentName: "Actor"): value is ActorPF2e;
    function isDocumentType(value: unknown, documentName: "AmbientLight"): value is AmbientLightDocumentPF2e;
    function isDocumentType(value: unknown, documentName: "ChatMessage"): value is ChatMessagePF2e;
    function isDocumentType(value: unknown, documentName: "Combat"): value is EncounterPF2e;
    function isDocumentType(value: unknown, documentName: "Combatant"): value is CombatantPF2e;
    function isDocumentType(value: unknown, documentName: "Item"): value is ItemPF2e;
    function isDocumentType(value: unknown, documentName: "Macro"): value is MacroPF2e;
    function isDocumentType(value: unknown, documentName: "Region"): value is RegionDocumentPF2e;
    function isDocumentType(value: unknown, documentName: "RegionBehavior"): value is RegionBehaviorPF2e;
    function isDocumentType(value: unknown, documentName: "Scene"): value is ScenePF2e;
    function isDocumentType(value: unknown, documentName: "Tile"): value is TileDocumentPF2e;
    function isDocumentType(value: unknown, documentName: "Token"): value is TokenDocumentPF2e;
    function isDocumentType(value: unknown, documentName: "User"): value is UserPF2e;
    function documentHasParent(value: Maybe<ActiveEffectPF2e<ActorPF2e | ItemPF2e | null>>): value is ActiveEffectPF2e<ActorPF2e | ItemPF2e>;
    function documentHasParent(value: Maybe<ActorPF2e>): value is ActorPF2e<TokenDocumentPF2e>;
    function documentHasParent(value: Maybe<AmbientLightDocumentPF2e>): value is AmbientLightDocumentPF2e<ScenePF2e>;
    function documentHasParent(value: Maybe<CombatantPF2e>): value is CombatantPF2e<EncounterPF2e>;
    function documentHasParent(value: Maybe<ItemPF2e>): value is ItemPF2e<ActorPF2e>;
    function documentHasParent(value: Maybe<RegionDocumentPF2e>): value is RegionDocumentPF2e<ScenePF2e>;
    function documentHasParent(value: Maybe<RegionBehaviorPF2e>): value is RegionBehaviorPF2e<RegionDocumentPF2e>;
    function documentHasParent(value: Maybe<TileDocumentPF2e>): value is TileDocumentPF2e<ScenePF2e>;
    function documentHasParent(value: Maybe<TokenDocumentPF2e>): value is TokenDocumentPF2e<ScenePF2e>;

    function getCurrentUser(): UserPF2e;
    function userIsGM(user?: UserPF2e): boolean;
    function getPrimaryUpdater(actor: ActorPF2e): UserPF2e | null;
    function isPrimaryUpdater(actor: ActorPF2e, user?: UserPF2e): boolean;
    function primaryPlayerOwner(actor: ActorPF2e): UserPF2e | null;
    function isPrimaryOwner(actor: ActorPF2e, user?: UserPF2e): boolean;
    function getTargets(user?: UserPF2e): TokenPF2e<TokenDocumentPF2e<ScenePF2e>>[];
}

export * from "@7h3laughingman/foundry-helpers/utilities";

export * from "./alliance.js";
export * from "./check.js";
export * from "./damage.js";
export * from "./distance.js";
export * from "./notes.js";
export * from "./roll.js";
export * from "./scene.js";
export * from "./system.js";
export * from "./token.js";
