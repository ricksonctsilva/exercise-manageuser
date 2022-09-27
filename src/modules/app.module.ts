import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ApiModule } from "./api.module";
import { RepositoryModule } from "./repository.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    RepositoryModule,
    ApiModule
  ],
})

export class AppModule {}
