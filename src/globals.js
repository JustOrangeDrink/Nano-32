const html = document.querySelector("html");

const TILE_SIZE = 24;

const spritesheet = document.createElement("img");

const SCREEN_WIDTH = html.clientWidth;
const SCREEN_HEIGHT = html.clientHeight;

const CANVAS_TILED_WIDTH = Math.floor((SCREEN_WIDTH * 0.7) / TILE_SIZE);
const CANVAS_TILED_HEIGHT = Math.floor(SCREEN_HEIGHT / TILE_SIZE);

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const mainUiCanvas = document.querySelectorAll("canvas")[1];
const mainUiCtx = mainUiCanvas.getContext("2d");

const inventoryUiCanvas = document.querySelectorAll("canvas")[2];
const inventoryUiCtx = inventoryUiCanvas.getContext("2d");

inventoryUiCanvas.width = SCREEN_WIDTH;
inventoryUiCanvas.height = SCREEN_HEIGHT;

canvas.width = CANVAS_TILED_WIDTH * TILE_SIZE;
canvas.height = CANVAS_TILED_HEIGHT * TILE_SIZE;

mainUiCanvas.width = CANVAS_TILED_WIDTH * 0.5 * TILE_SIZE;
mainUiCanvas.height = CANVAS_TILED_HEIGHT * TILE_SIZE;

const MAP_TILED_WIDTH = 100;
const MAP_TILED_HEIGHT = 100;

const tilemap = [];
const knownMap = [];

for (let y = 0; y < MAP_TILED_HEIGHT; y++) {
  tilemap.push([]);
  knownMap.push([]);
  for (let x = 0; x < MAP_TILED_WIDTH; x++) {
    tilemap[y].push([]);
    knownMap[y].push([]);
  }
}

const entities = [];

const viewPort = {
  x: 0,
  y: 0,
  w: 30,
  h: 30,
  scrollTo(x, y) {
    this.x = x - Math.floor(this.w / 2);
    this.y = y - Math.floor(this.h / 2);
  },
};

const rooms = [];

const time = {
  currentTime: 0,
  timeJump: 0,
};

const uniqueAssets = {};
const uniqueAssetsDark = {};

export {
  canvas,
  ctx,
  mainUiCanvas,
  mainUiCtx,
  inventoryUiCanvas,
  inventoryUiCtx,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  TILE_SIZE,
  CANVAS_TILED_WIDTH,
  CANVAS_TILED_HEIGHT,
  MAP_TILED_WIDTH,
  MAP_TILED_HEIGHT,
  spritesheet,
  viewPort,
  tilemap,
  knownMap,
  entities,
  rooms,
  time,
  uniqueAssets,
  uniqueAssetsDark,
};
