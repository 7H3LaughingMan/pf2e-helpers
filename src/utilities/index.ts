import { ActorPF2e, ItemPF2e, MacroPF2e, ScenePF2e, UserPF2e } from "@7h3laughingman/pf2e-types";

import CompendiumCollection = foundry.documents.collections.CompendiumCollection;

declare module "@7h3laughingman/foundry-helpers/utilities" {
    function isCompendiumPack<T extends ActorPF2e<null>>(pack: unknown, type: "Actor"): pack is CompendiumCollection<T>;
    function isCompendiumPack<T extends ItemPF2e<null>>(pack: unknown, type: "Item"): pack is CompendiumCollection<T>;
    function isCompendiumPack<T extends MacroPF2e>(pack: unknown, type: "Macro"): pack is CompendiumCollection<T>;
    function isCompendiumPack<T extends ScenePF2e>(pack: unknown, type: "Scene"): pack is CompendiumCollection<T>;

    function getCurrentUser(): UserPF2e;
    function userIsGM(user?: UserPF2e): boolean;
    function getPrimaryUpdater(actor: ActorPF2e): UserPF2e | null;
    function isPrimaryUpdater(actor: ActorPF2e, user?: UserPF2e): boolean;
    function primaryPlayerOwner(actor: ActorPF2e): UserPF2e | null;
    function isPrimaryOwner(actor: ActorPF2e, user?: UserPF2e): boolean;
}

export * from "@7h3laughingman/foundry-helpers/utilities";

export * from "./damage.js";
