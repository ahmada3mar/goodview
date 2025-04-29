import { defineNuxtPlugin } from "nuxt/app";
import { canonical } from "~/logic/canonical";
export default defineNuxtPlugin(()=>canonical());
