<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notepad extends Model
{
    protected $fillable = ['user_id', 'title', 'content'];

    public function user()
    {
        $this->belongsTo(User::class);
    }
}
