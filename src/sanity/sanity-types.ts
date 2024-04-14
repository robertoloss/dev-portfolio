import { defineConfig } from "sanity";
import { picture } from "./schemas/picture";
import { project } from "./schemas/project";
import { website } from "./schemas/website";
import { cv } from "./schemas/cv";
import { cvEntry } from "./schemas/cv-entry";

export const config = defineConfig({
  name: 'default',
  title: 'Dev-Portfolio',

  projectId: 'i3j6s8ke',
  dataset: 'production',

  schema: {
    types: [
			project,
			picture,
			website,
			cv,
			cvEntry,
		],
  },
})







