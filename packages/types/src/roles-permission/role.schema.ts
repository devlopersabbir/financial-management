import { z } from "zod";
import { actions, resources } from "./constant";

const permissionSchema = z.object({
  resource: z.enum(resources),
  actions: z.array(z.enum(actions)),
});

const roleSchema = z.object({
  name: z.string().min(1, "Role name is required"),
  permissions: z.array(permissionSchema),
});
export type Roles = z.infer<typeof roleSchema>;
export type Permissions = z.infer<typeof permissionSchema>;
