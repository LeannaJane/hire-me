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


// Models define the structure and behaviour of the data the application uses, and it acts
// as the blueprint of how data is retrieved, stored, and maniuplated.
