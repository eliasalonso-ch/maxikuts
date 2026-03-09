"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { esESLocale } from "@sanity/locale-es-es";
import { schema } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId: "wqlcjwxy",
  dataset: "production",
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: "2026-03-09" }),
    esESLocale(),
  ],
});
