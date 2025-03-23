<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Spreadsheet extends Model
{
    protected $fillable = [
        'user_id', 'spreadsheet_data'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
