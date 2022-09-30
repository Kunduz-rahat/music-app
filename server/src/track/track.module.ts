import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentSchema, Comment } from "./schemas/comments.schema";
import { Track, TrackSchema } from "./schemas/track.schema";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";


@Module({
	imports :[
		MongooseModule.forFeature([{name:Track.name, schema:TrackSchema}]),
		MongooseModule.forFeature([{name:Comment.name, schema:CommentSchema}])
	],
controllers:[TrackController],
providers:[TrackService]
})

export class TrackModule {}