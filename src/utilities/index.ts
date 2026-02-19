import { ActorPF2e, UserPF2e } from "@7h3laughingman/pf2e-types";

declare module "@7h3laughingman/foundry-helpers/utilities" {
    function getCurrentUser(): UserPF2e;
    function userIsGM(user?: UserPF2e): boolean;
    function getPrimaryUpdater(actor: ActorPF2e): UserPF2e | null;
    function isPrimaryUpdater(actor: ActorPF2e, user?: UserPF2e): boolean;
    function primaryPlayerOwner(actor: ActorPF2e): UserPF2e | null;
    function isPrimaryOwner(actor: ActorPF2e, user?: UserPF2e): boolean;
}

export * from "@7h3laughingman/foundry-helpers/utilities";

export * from "./check.js";
export * from "./damage.js";
export * from "./notes.js";
export * from "./roll.js";
export * from "./system.js";
