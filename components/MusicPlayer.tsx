"use client";

import { MusicTrack } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Music2 } from "lucide-react";

interface MusicPlayerProps {
  track: MusicTrack;
}

export function MusicPlayer({ track }: MusicPlayerProps) {
  return (
    <Card className="fixed bottom-4 right-4 p-4 w-64 bg-white/80 backdrop-blur-sm dark:bg-black/80">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-md overflow-hidden">
          <img
            src={track.albumArt}
            alt={`${track.title} album art`}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate">{track.title}</p>
          <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
        </div>
        <Music2 className="w-5 h-5 text-primary animate-pulse" />
      </div>
    </Card>
  );
}