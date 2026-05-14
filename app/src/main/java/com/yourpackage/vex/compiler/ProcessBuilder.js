// File: /Vex/app/src/main/java/com/yourpackage/vex/compiler/ProcessBuilder.js

import { exec, spawn } from "child_process";
import path from "path";

export function runGradleBuild(projectPath, task) {
  return new Promise((resolve, reject) => {
    if (!projectPath || typeof projectPath !== "string") {
      return reject(new Error("projectPath must be a non-empty string"));
    }
    if (!task || typeof task !== "string") {
      return reject(new Error("task must be a non-empty string"));
    }

    const gradlew = path.join(projectPath, "gradlew");

    const process = spawn(gradlew, [task], {
      cwd: projectPath,
      stdio: ["ignore", "pipe", "pipe"],
    });

    const handleLine = (data) => {
      const lines = data.toString().split("\n");
      for (const line of lines) {
        if (line.trim()) {
          console.log(`Build Output: ${line}`);
        }
      }
    };

    process.stdout.on("data", handleLine);
    process.stderr.on("data", handleLine);

    process.on("error", (err) => {
      reject(new Error(`Failed to start Gradle process: ${err.message}`));
    });

    process.on("close", (exitCode) => {
      if (exitCode === 0) {
        console.log("Build Successful");
      } else {
        console.log(`Build Failed with code ${exitCode}`);
      }
      resolve(exitCode);
    });
  });
}

export function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject(new Error(`Command failed: ${stderr || error.message}`));
      }
      resolve(stdout.trim());
    });
  });
}
