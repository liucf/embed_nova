<?php

namespace App\Observers;

use App\Jobs\UpdateVideo;
use App\Models\Video;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class VideoObserver
{
    public $MY_SECRET_TOKEN = '2S1Oml15Pz';

    /**
     * Handle the Video "created" event.
     *
     * @param  \App\Models\Video  $video
     * @return void
     */
    public function created(Video $video)
    {
        Log::info(env('CLIENT_URL').'/api/revalidate?secret='.$this->MY_SECRET_TOKEN.'&pageslug='.$video->slug);

        return Http::get(env('CLIENT_URL').'/api/revalidate?secret='.$this->MY_SECRET_TOKEN.'&pageslug='.$video->slug);
    }

    /**
     * Handle the Video "updated" event.
     *
     * @param  \App\Models\Video  $video
     * @return void
     */
    public function updated(Video $video)
    {
        UpdateVideo::dispatch($video)->delay(now()->addSeconds(1));
    }

    /**
     * Handle the Video "deleted" event.
     *
     * @param  \App\Models\Video  $video
     * @return void
     */
    public function deleted(Video $video)
    {
        //
    }

    /**
     * Handle the Video "restored" event.
     *
     * @param  \App\Models\Video  $video
     * @return void
     */
    public function restored(Video $video)
    {
        //
    }

    /**
     * Handle the Video "force deleted" event.
     *
     * @param  \App\Models\Video  $video
     * @return void
     */
    public function forceDeleted(Video $video)
    {
        //
    }
}
