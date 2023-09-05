// deno-lint-ignore-file no-explicit-any

import { LogLevel } from "./enums.ts";

// const LOG_LEVEL = LogLevel.INFO;
const LOG_LEVEL = parseInt(Deno.env.get("LOG_LEVEL") || "1");

export class log {
  static debug(...data: any[]) {
    if (LOG_LEVEL.valueOf() === LogLevel.DEBUG) {
      console.debug("[DEBUG]", data);
    }
  }

  static info(...data: any[]) {
    if (LOG_LEVEL.valueOf() <= LogLevel.INFO) {
      console.info("[INFO]", data);
    }
  }

  static warn(...data: any[]) {
    if (LOG_LEVEL.valueOf() <= LogLevel.WARN) {
      console.warn("[WARN]", data);
    }
  }

  static error(...data: any[]) {
    if (LOG_LEVEL.valueOf() <= LogLevel.ERROR) {
      console.error("[ERROR]", data);
    }
  }
}
