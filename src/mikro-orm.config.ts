import {Post} from "./entities/Post"
import dotev from 'dotenv'
import {__prod__} from "./constant"
import {MikroORM} from '@mikro-orm/core'
import path from "path"
dotev.config()

export default {
    migrations:{
        path: path.join(__dirname,'./migrations' ), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName:'reddit-clone-app',
    type:"postgresql",
    debug: !__prod__,
    user: process.env.user,
    password: process.env.password,
}  as Parameters<typeof MikroORM.init>[0];

