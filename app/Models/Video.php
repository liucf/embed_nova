<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $appends = ['createddatehuman'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'video_tag');
    }

    public function getCreateddatehumanAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
