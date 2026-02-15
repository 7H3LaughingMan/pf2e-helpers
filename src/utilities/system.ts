import { DocumentUUID } from "@7h3laughingman/foundry-types/client/utils/_module.mjs";
import * as R from "remeda";

export class SYSTEM {
    static get id(): SystemId {
        return game.system.id as SystemId;
    }

    static get isPF2e(): boolean {
        return this.id === "pf2e";
    }

    static get isSF2e(): boolean {
        return this.id === "sf2e";
    }

    static path<T extends string>(tail: T): `systems/${string}/${T}`;
    static path(...path: string[]): string;
    static path(...path: string[]): string {
        return `systems/${this.id}/${R.join(path, "/")}`;
    }

    static uuid<P extends DocumentUUID, S extends DocumentUUID>(pf2e: P, sf2e: S): P | S {
        return this.isPF2e ? pf2e : sf2e;
    }

    static sluggify(text: string, { camel }: { camel?: "dromedary" | "bactrian" | null } = {}): string {
        return game.pf2e.system.sluggify(text, { camel });
    }
}
