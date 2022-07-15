<?php

namespace App\Models;

use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Video extends Model
{
    use HasFactory;

    protected $appends = ['createddatehuman'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'video_tag');
    }

    public function getCreateddatehumanAttribute(){
        return $this->created_at->diffForHumans();
    }
}
