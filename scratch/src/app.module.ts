import { Module } from "@nestjs/common";
import AppController from "./app.controller";

@Module({
    controllers: [AppController]
})

class AppModule {}

export default AppModule