import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';


@Module({
	imports: [
		MongooseModule.forRoot('mongodb+srv://admin:kuzya1704@cluster0.v779xo1.mongodb.net/spotify?retryWrites=true&w=majority'),
		TrackModule]

})

export class AppModule{}