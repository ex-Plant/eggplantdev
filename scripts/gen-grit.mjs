#!/usr/bin/env node

/**
 * gen-grit.mjs — Generate grit texture SVG files
 *
 * Usage:
 *   node scripts/gen-grit.mjs [options]
 *
 * Options:
 *   --count, -n       Number of particles (default: 1200)
 *   --min-scale       Minimum scale (default: 0.3)
 *   --max-scale       Maximum scale (default: 1.0)
 *   --min-opacity     Minimum opacity (default: 0.2)
 *   --max-opacity     Maximum opacity (default: 0.9)
 *   --output, -o      Output filename (default: grit-texture.svg)
 *   --exclude         Comma-separated shape names to exclude (e.g. --exclude flame,star)
 *   --only            Comma-separated shape names to include (e.g. --only circle,diamond)
 *
 * Available shapes: circle, diamond, arrow, teardrop, flame, star
 *   All shapes are used by default. Use --exclude or --only to filter.
 *   To add a new shape: add an entry to SHAPES with { name, d, weight }.
 *
 * Presets (matching existing files):
 *   subtle:       -n 2000 --only circle,diamond,arrow,teardrop --min-scale 0.30 --max-scale 1.00 --min-opacity 0.200 --max-opacity 0.999 -o public/grit-texture-subtle.svg
 *   medium:       -n 1200 --only circle,diamond,arrow,teardrop --min-scale 0.40 --max-scale 1.20 --min-opacity 0.200 --max-opacity 0.900 -o public/grit-texture-medium.svg
 *   medium-dense: -n 1350 --min-scale 0.45 --max-scale 1.60 --min-opacity 0.261 --max-opacity 0.949 -o public/grit-texture-medium-dense.svg
 *   dense:        -n 1500 --min-scale 0.50 --max-scale 2.00 --min-opacity 0.322 --max-opacity 1.000 -o public/grit-texture-dense.svg
 */

import { writeFileSync } from "node:fs";

const SHAPES = [
  {
    name: "circle",
    d: "M1,2 C1.6,2 2,1.6 2,1 C2,0.4 1.6,0 1,0 C0.4,0 0,0.4 0,1 C0,1.6 0.4,2 1,2 Z",
    weight: 5,
  },
  {
    name: "diamond",
    d: "M0,5 L1.615,3.846 L3,2.5 L1.615,1.154 L0,0 L0,2.5 Z",
    weight: 1,
  },
  {
    name: "arrow",
    d: "M2.5,3 L3.846,1.615 L5,0 L2.5,0 L0,0 L1.154,1.615 Z",
    weight: 1,
  },
  {
    name: "teardrop",
    d: "M3.238,4 C3.619,4 4,3 4,2 L4,0 L1.905,0 L0,0 L1.143,2 C1.714,3 2.667,4 3.238,4 Z",
    weight: 1,
  },
  {
    name: "flame",
    d: "M2.391,3.489 C3.913,2.625 5,1.546 5,0.898 C5,-0.828 3.043,0.035 1.522,2.625 L0,5 L2.391,3.489 Z",
    weight: 1,
  },
  {
    name: "star",
    d: "M10,5.949 L10,3.077 L10,0 L8.2,0 C7.4,0 6.6,1.026 6.6,2.256 L6.6,4.513 L3.4,3.282 L0,2.051 L2.4,4.923 L4.8,8 L7.4,6.974 L10,5.949 Z",
    weight: 1,
  },
];

const parseArgs = (argv) => {
  const args = {
    count: 1200,
    minScale: 0.3,
    maxScale: 1.0,
    minOpacity: 0.2,
    maxOpacity: 0.9,
    output: "grit-texture.svg",
    exclude: [],
    only: [],
  };

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    const next = argv[i + 1];

    switch (arg) {
      case "--count":
      case "-n":
        args.count = Number(next);
        i++;
        break;
      case "--min-scale":
        args.minScale = Number(next);
        i++;
        break;
      case "--max-scale":
        args.maxScale = Number(next);
        i++;
        break;
      case "--min-opacity":
        args.minOpacity = Number(next);
        i++;
        break;
      case "--max-opacity":
        args.maxOpacity = Number(next);
        i++;
        break;
      case "--output":
      case "-o":
        args.output = next;
        i++;
        break;
      case "--exclude":
        args.exclude = next.split(",").map((s) => s.trim());
        i++;
        break;
      case "--only":
        args.only = next.split(",").map((s) => s.trim());
        i++;
        break;
    }
  }

  return args;
};

const resolveShapes = (args) => {
  if (args.only.length > 0) {
    const resolved = SHAPES.filter((s) => args.only.includes(s.name));
    const unknown = args.only.filter((n) => !SHAPES.some((s) => s.name === n));
    if (unknown.length > 0) {
      console.error(`Unknown shape names: ${unknown.join(", ")}`);
      console.error(`Available: ${SHAPES.map((s) => s.name).join(", ")}`);
      process.exit(1);
    }
    return resolved;
  }

  if (args.exclude.length > 0) {
    const unknown = args.exclude.filter((n) => !SHAPES.some((s) => s.name === n));
    if (unknown.length > 0) {
      console.error(`Unknown shape names: ${unknown.join(", ")}`);
      console.error(`Available: ${SHAPES.map((s) => s.name).join(", ")}`);
      process.exit(1);
    }
    return SHAPES.filter((s) => !args.exclude.includes(s.name));
  }

  return SHAPES;
};

const rand = (min, max) => Math.random() * (max - min) + min;

const pickShape = (shapes) => {
  const totalWeight = shapes.reduce((sum, s) => sum + s.weight, 0);
  let r = Math.random() * totalWeight;

  for (const shape of shapes) {
    r -= shape.weight;
    if (r <= 0) return shape.d;
  }

  return shapes[0].d;
};

const generate = (activeShapes, args) => {
  const paths = [];

  for (let i = 0; i < args.count; i++) {
    const x = rand(0, 1000).toFixed(1);
    const y = rand(0, 2000).toFixed(1);
    const scale = rand(args.minScale, args.maxScale).toFixed(2);
    const rotation = rand(0, 360).toFixed(1);
    const opacity = rand(args.minOpacity, args.maxOpacity).toFixed(3);
    const d = pickShape(activeShapes);

    paths.push(
      `<path transform="translate(${x},${y}) scale(${scale}) rotate(${rotation})" d="${d}" fill="rgba(255,255,255,${opacity})"/>`,
    );
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 2000">',
    '<g id="Grit-Parts">',
    paths.join(""),
    "</g>",
    "</svg>",
  ].join("\n");
};

const args = parseArgs(process.argv);
const activeShapes = resolveShapes(args);
const svg = generate(activeShapes, args);
writeFileSync(args.output, svg);
console.log(
  `Generated ${args.output} — ${args.count} particles, shapes: [${activeShapes.map((s) => s.name).join(", ")}], scale ${args.minScale}-${args.maxScale}, opacity ${args.minOpacity}-${args.maxOpacity}`,
);
