import { entities } from "../globals.js";
import { getEntityFromArray, randomInt } from "../utils.js";
import { tryMovement } from "./engine.js";

let player;
function guardBehavior(entity) {
  if (!player) player = getEntityFromArray(0, "Player", entities);

  let dx;
  let dy;
  if (player.x === entity.x) dx = 0;
  if (player.x < entity.x) dx = -1;
  if (player.x > entity.x) dx = 1;

  if (player.y === entity.y) dy = 0;
  if (player.y < entity.y) dy = -1;
  if (player.y > entity.y) dy = 1;

  tryMovement(entity, dx, dy);

  return;
}

export { guardBehavior };
