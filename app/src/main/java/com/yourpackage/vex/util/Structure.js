// File: /Vex/app/src/main/java/com/yourpackage/vex/util/Structure.js

export const VEX_STRUCTURE = [
  { path: "app/src/main/java/com/yourpackage/vex/editor",   type: "dir",  purpose: "CodeEditor logic (using CodeView library)" },
  { path: "app/src/main/java/com/yourpackage/vex/compiler", type: "dir",  purpose: "ProcessBuilder wrappers for Gradle/Java" },
  { path: "app/src/main/java/com/yourpackage/vex/overlay",  type: "dir",  purpose: "OverlayService and WindowManager logic" },
  { path: "app/src/main/java/com/yourpackage/vex/ui",       type: "dir",  purpose: "Main activity, file explorer, settings" },
  { path: "app/src/main/java/com/yourpackage/vex/util",     type: "dir",  purpose: "AppConfig and helper classes" },
  { path: "app/src/main/assets",                            type: "dir",  purpose: "Place toolchains here (openjdk.zip, gradle.zip)" },
  { path: "app/src/main/res",                               type: "dir",  purpose: "Layouts, themes, icons" },
  { path: "app/build.gradle",                               type: "file", purpose: "Dependencies (CodeView, etc.)" },
  { path: ".gitignore",                                     type: "file", purpose: "Ignore build directories and local properties" },
  { path: "README.md",                                      type: "file", purpose: "Project documentation" },
];

export function getDirectories() {
  return VEX_STRUCTURE.filter((e) => e.type === "dir");
}

export function getFiles() {
  return VEX_STRUCTURE.filter((e) => e.type === "file");
}

export function findEntry(relativePath) {
  return VEX_STRUCTURE.find((e) => e.path === relativePath);
}

export function printTree() {
  console.log("/Vex");
  for (const entry of VEX_STRUCTURE) {
    const indent = "  ".repeat(entry.path.split("/").length - 1);
    const label = entry.path.split("/").pop();
    const icon = entry.type === "dir" ? "📁" : "📄";
    console.log(`${indent}${icon} ${label}  ← ${entry.purpose}`);
  }
}
