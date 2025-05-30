import {
  Collision,
  Size,
  Health,
  Turns,
  Damage,
  Alignment,
  Behavior,
  Stats,
  Occlusion,
  CPU,
  Attributes,
  Inventory,
  Pickable,
  Stack,
  WeaponSlots,
  Weapon,
} from "./Component/components.js";
import { Entity } from "./Entity/entities.js";
import { guardBehavior } from "./System/ai.js";

const tiles = {};

class Tile {
  constructor(name, title, z, charX, charY, color, components) {
    this.name = name;
    this.title = title;
    this.z = z;
    this.charX = charX;
    this.charY = charY;
    this.color = color;
    this.components = components;

    tiles[name] = this;
  }

  init(x, y) {
    const entity = new Entity(
      this.name,
      this.title,
      x,
      y,
      this.z,
      this.charX,
      this.charY,
      this.color
    );

    if (this.components) {
      for (let i = 0; i < this.components.length; i++) {
        const component = this.components[i];
        entity.addComponent(new component[0](...component[1]));
      }
    }

    return entity;
  }
}

new Tile(
  "Player",
  "Player",
  4,
  0,
  4,
  [255, 255, 255],
  [
    [Collision, [0, 0]],
    [Health, [30, 30]],
    [CPU, [10]],
    [Damage, [10]],
    [Turns, [1, 1, 0]],
    [Alignment, ["Good"]],
    [Stats, [65, 10, 1]],
    [Attributes, [3, 5, 3]],
    [Inventory, []],
    [WeaponSlots, [1]],
  ]
);

new Tile(
  "Guard",
  "Guard",
  3,
  7,
  4,
  [255, 0, 255],
  [
    [Collision, []],
    [Health, [15, 15]],
    [Damage, [5]],
    [Turns, [1, 1, 0]],
    [Alignment, ["Bad"]],
    [Behavior, [guardBehavior]],
    [Stats, [40, 1, 1]],
    [Attributes, [1, 1, 1]],
  ]
);

new Tile(
  "Bit",
  "Bit",
  1,
  13,
  14,
  [255, 255, 0],
  [
    [Size, ["Tiny"]],
    [Pickable, []],
    [Stack, []],
  ]
);

new Tile(
  "Letter",
  "Letter",
  1,
  5,
  15,
  [255, 160, 160],
  [
    [Size, ["Tiny"]],
    [Pickable, []],
  ]
);

new Tile("Floor", "Floor", 0, 9, 15, [40, 40, 40]);

new Tile(
  "Wall",
  "Wall",
  2,
  3,
  2,
  [0, 255, 0],
  [
    [Collision, [true]],
    [Occlusion, [true]],
  ]
);

new Tile(
  "Sword",
  "Sword",
  1,
  8,
  1,
  [220, 220, 220],
  [
    [Size, ["Tiny"]],
    [Pickable, []],
    [Weapon, [6]],
  ]
);

export { tiles };
