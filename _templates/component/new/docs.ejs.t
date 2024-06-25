---
to: lib/components/<%= Name %>/<%= Name %>.mdx
---
import { Primary, Meta, Controls, Stories } from "@storybook/blocks";

import * as <%= Name %> from "./<%= Name %>.stories.ts";

<Meta of={<%= Name %>} />
<Primary />
<Controls />
<Stories />
