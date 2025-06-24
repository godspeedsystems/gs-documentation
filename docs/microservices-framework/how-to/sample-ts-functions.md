---
title: Examples of ts functions to be used in prisma datasource interactions
description: Examples of ts functions to be used in prisma datasource interactions
keywords: [Godspeed, prisma function, find, get, create, update, ts functions, database interactions, interagte prisma, prisma APIs, call prisma, import prisma client]
---

```ts title=create.ts
import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";
import { PrismaClient } from "../../../../../datasources/prisma-clients/schmaName";

module.exports = async (ctx: GSContext, args: PlainObject) => {
    const { inputs: { data: { user, inputs, params, headers } }, logger, datasources } = ctx;
    const userId= user.userId ;

    const client: PrismaClient = datasources.schmaName.client;
    try {
            const getUser = await client.User.findUnique({
            where: { id: userId } });
            if(getUser)
            {
                return new GSStatus(true, 200, 'OK', getUser );
            }
            else
            {
                return new GSStatus(true, 200, 'OK', {} );
            }
    }
    catch (error: any) {
        const errorData = error.stack || error;
        logger.info(errorData);
      }
 }
 ```


```ts title=update.ts
import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";
import { PrismaClient } from "../../../../../datasources/prisma-clients/schmaName";

module.exports = async (ctx: GSContext, args: PlainObject) => {
    const { inputs: { data: { user, body } }, logger, datasources } = ctx;
    try {     
        const client: PrismaClient = datasources.schemaName.client;

        const updatedUser = await client.user.update({ 
                            where: { id: user.userId },
                             data: { ...body   } });   
        const contactEmail = await client.contacts.update({ 
                        data: { email: updatedUser.email,                        
                                userId: user.userId } });
 
        return new GSStatus(true, 200, 'OK', updatedUser, {});
        }
        catch (error: any) {
                const errorData = error.stack || error;
                return new GSStatus(false, 400, 'Failed', errorData, {});
            }
        };
```

```ts title getOne.ts
import { GSContext, GSStatus, PlainObject } from "@godspeedsystems/core";
import { PrismaClient } from "../../../../../datasources/prisma-clients/schmaName";


module.exports = async (ctx: GSContext, args: PlainObject) => {
    const { inputs: { data: { user, inputs, params, headers } }, logger, datasources } = ctx;
    const userId= user.userId ;

    const client: PrismaClient = datasources.schemaName.client;
    try {
            const getUser = await client.User.findUnique({
            where: { id: userId } });
            if(getUser)
            {
                return new GSStatus(true, 200, 'OK', getUser, );
            }
            else
            {
                return new GSStatus(true, 200, 'OK', {}, );
            }
    }
    catch (error: any) {
        const errorData = error.stack || error;
        logger.info(errorData);
      }
 }
```