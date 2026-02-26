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

import AmbientSound = foundry.canvas.placeables.AmbientSound;
import Drawing = foundry.canvas.placeables.Drawing;
import Note = foundry.canvas.placeables.Note;
import Tile = foundry.canvas.placeables.Tile;
import Wall = foundry.canvas.placeables.Wall;

export * from "@7h3laughingman/foundry-helpers/utilities";

export function isPlaceableObject(value: unknown, embeddedName: "AmbientLight"): value is AmbientLightPF2e;
export function isPlaceableObject(value: unknown, embeddedName: "AmbientSound"): value is AmbientSound;
export function isPlaceableObject(value: unknown, embeddedName: "Drawing"): value is Drawing;
export function isPlaceableObject(value: unknown, embeddedName: "MeasuredTemplate"): value is MeasuredTemplatePF2e;
export function isPlaceableObject(value: unknown, embeddedName: "Note"): value is Note;
export function isPlaceableObject(value: unknown, embeddedName: "Region"): value is RegionPF2e;
export function isPlaceableObject(value: unknown, embeddedName: "Tile"): value is Tile;
export function isPlaceableObject(value: unknown, embeddedName: "Token"): value is TokenPF2e;
export function isPlaceableObject(value: unknown, embeddedName: "Wall"): value is Wall;

export function placeableObjectHasScene(
    value: Maybe<AmbientLightPF2e>
): value is AmbientLightPF2e<AmbientLightDocumentPF2e<ScenePF2e>>;
export function placeableObjectHasScene(
    value: Maybe<AmbientSound>
): value is AmbientSound<AmbientSoundDocument<ScenePF2e>>;
export function placeableObjectHasScene(value: Maybe<Drawing>): value is Drawing<DrawingDocument<ScenePF2e>>;
export function placeableObjectHasScene(
    value: Maybe<MeasuredTemplatePF2e>
): value is MeasuredTemplatePF2e<MeasuredTemplateDocumentPF2e<ScenePF2e>>;
export function placeableObjectHasScene(value: Maybe<Note>): value is Note<NoteDocument<ScenePF2e>>;
export function placeableObjectHasScene(value: Maybe<RegionPF2e>): value is RegionPF2e<RegionDocumentPF2e<ScenePF2e>>;
export function placeableObjectHasScene(value: Maybe<Tile>): value is Tile<TileDocument<ScenePF2e>>;
export function placeableObjectHasScene(value: Maybe<TokenPF2e>): value is TokenPF2e<TokenDocumentPF2e<ScenePF2e>>;
export function placeableObjectHasScene(value: Maybe<Wall>): value is Wall<WallDocument<ScenePF2e>>;

export function isDocumentType(
    value: unknown,
    documentName: "ActiveEffect"
): value is ActiveEffectPF2e<ActorPF2e | ItemPF2e | null>;
export function isDocumentType(value: unknown, documentName: "Actor"): value is ActorPF2e;
export function isDocumentType(value: unknown, documentName: "ActorDelta"): value is ActorDelta;
export function isDocumentType(value: unknown, documentName: "Adventure"): value is Adventure;
export function isDocumentType(value: unknown, documentName: "AmbientLight"): value is AmbientLightDocumentPF2e;
export function isDocumentType(value: unknown, documentName: "AmbientSound"): value is AmbientSoundDocument;
export function isDocumentType(value: unknown, documentName: "Card"): value is Card;
export function isDocumentType(value: unknown, documentName: "Cards"): value is Cards;
export function isDocumentType(value: unknown, documentName: "ChatMessage"): value is ChatMessagePF2e;
export function isDocumentType(value: unknown, documentName: "Combat"): value is EncounterPF2e;
export function isDocumentType(value: unknown, documentName: "Combatant"): value is CombatantPF2e;
export function isDocumentType(value: unknown, documentName: "CombatantGroup"): value is CombatantGroup;
export function isDocumentType(value: unknown, documentName: "Drawing"): value is DrawingDocument;
export function isDocumentType(value: unknown, documentName: "FogExploration"): value is FogExploration;
export function isDocumentType(value: unknown, documentName: "Folder"): value is Folder;
export function isDocumentType(value: unknown, documentName: "Item"): value is ItemPF2e;
export function isDocumentType(value: unknown, documentName: "JournalEntry"): value is JournalEntry;
export function isDocumentType(value: unknown, documentName: "JournalEntryCategory"): value is JournalEntryCategory;
export function isDocumentType(value: unknown, documentName: "JournalEntryPage"): value is JournalEntryPage;
export function isDocumentType(value: unknown, documentName: "Macro"): value is MacroPF2e;
export function isDocumentType(value: unknown, documentName: "MeasuredTemplate"): value is MeasuredTemplateDocument;
export function isDocumentType(value: unknown, documentName: "Note"): value is NoteDocument;
export function isDocumentType(value: unknown, documentName: "Playlist"): value is Playlist;
export function isDocumentType(value: unknown, documentName: "PlaylistSound"): value is PlaylistSound;
export function isDocumentType(value: unknown, documentName: "Region"): value is RegionDocumentPF2e;
export function isDocumentType(value: unknown, documentName: "RegionBehavior"): value is RegionBehaviorPF2e;
export function isDocumentType(value: unknown, documentName: "RollTable"): value is RollTable;
export function isDocumentType(value: unknown, documentName: "Scene"): value is ScenePF2e;
export function isDocumentType(value: unknown, documentName: "Setting"): value is Setting;
export function isDocumentType(value: unknown, documentName: "TableResult"): value is TableResult;
export function isDocumentType(value: unknown, documentName: "Tile"): value is TileDocumentPF2e;
export function isDocumentType(value: unknown, documentName: "Token"): value is TokenDocumentPF2e;
export function isDocumentType(value: unknown, documentName: "User"): value is UserPF2e;
export function isDocumentType(value: unknown, documentName: "Wall"): value is WallDocument;

export function documentHasParent(
    value: Maybe<ActiveEffectPF2e<ActorPF2e | ItemPF2e | null>>
): value is ActiveEffectPF2e<ActorPF2e | ItemPF2e>;
export function documentHasParent(value: Maybe<ActorPF2e>): value is ActorPF2e<TokenDocumentPF2e>;
export function documentHasParent(value: Maybe<ActorDelta>): value is ActorDelta<TokenDocumentPF2e>;
export function documentHasParent(value: Maybe<AmbientLightDocumentPF2e>): value is AmbientLightDocumentPF2e<ScenePF2e>;
export function documentHasParent(value: Maybe<AmbientSoundDocument>): value is AmbientSoundDocument<ScenePF2e>;
export function documentHasParent(value: Maybe<CombatantPF2e>): value is CombatantPF2e<EncounterPF2e>;
export function documentHasParent(value: Maybe<CombatantGroup>): value is CombatantGroup<EncounterPF2e>;
export function documentHasParent(value: Maybe<DrawingDocument>): value is DrawingDocument<ScenePF2e>;
export function documentHasParent(value: Maybe<ItemPF2e>): value is ItemPF2e<ActorPF2e>;
export function documentHasParent(value: Maybe<JournalEntryCategory>): value is JournalEntryCategory<JournalEntry>;
export function documentHasParent(value: Maybe<JournalEntryPage>): value is JournalEntryPage<JournalEntry>;
export function documentHasParent(value: Maybe<MeasuredTemplateDocument>): value is MeasuredTemplateDocument<Scene>;
export function documentHasParent(value: Maybe<NoteDocument>): value is NoteDocument<ScenePF2e>;
export function documentHasParent(value: Maybe<PlaylistSound>): value is PlaylistSound<Playlist>;
export function documentHasParent(value: Maybe<RegionDocumentPF2e>): value is RegionDocumentPF2e<ScenePF2e>;
export function documentHasParent(value: Maybe<RegionBehaviorPF2e>): value is RegionBehaviorPF2e<RegionDocumentPF2e>;
export function documentHasParent(value: Maybe<TableResult>): value is TableResult<RollTable>;
export function documentHasParent(value: Maybe<TileDocumentPF2e>): value is TileDocumentPF2e<ScenePF2e>;
export function documentHasParent(value: Maybe<TokenDocumentPF2e>): value is TokenDocumentPF2e<ScenePF2e>;
export function documentHasParent(value: Maybe<WallDocument>): value is WallDocument<ScenePF2e>;

export function getCurrentUser(): UserPF2e;
export function userIsGM(user?: UserPF2e): boolean;
export function getPrimaryUpdater(actor: ActorPF2e): UserPF2e | null;
export function isPrimaryUpdater(actor: ActorPF2e, user?: UserPF2e): boolean;
export function primaryPlayerOwner(actor: ActorPF2e): UserPF2e | null;
export function isPrimaryOwner(actor: ActorPF2e, user?: UserPF2e): boolean;
export function getTargets(user?: UserPF2e): TokenPF2e<TokenDocumentPF2e<ScenePF2e>>[];
