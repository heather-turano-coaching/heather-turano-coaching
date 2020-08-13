import "./app.env";

import app from "nexus";
import { prisma } from "nexus-plugin-prisma";

app.use(prisma());
