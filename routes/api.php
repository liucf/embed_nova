<?php

use App\Models\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/videos', function (Request $request) {
    return Video::select(["id", "youtubeID", "title", "slug", "created_at"])->paginate(3);
});

Route::get('/slugs', function (Request $request) {
    return Video::all()->pluck("slug");
});

Route::get('/video/{slug}', function ($slug) {
    return Video::where('slug', $slug)->with('tags')->first();
});