import { defineConfig } from "@sanity-typed/types";
import type { InferSchemaValues } from "@sanity-typed/types";
import { picture } from "./schemas/picture";
import { project } from "./schemas/project";
import { website } from "./schemas/website";

const config = defineConfig({
  name: 'default',
  title: 'Dev-Portfolio',

  projectId: 'i3j6s8ke',
  dataset: 'production',

  schema: {
    types: [
			project,
			picture,
			website,
		],
  },
})

type SanityValues = InferSchemaValues<typeof config>;

export type Picture = SanityValues["picture"]
export type Project = SanityValues["project"]
export type Website = SanityValues["website"]
