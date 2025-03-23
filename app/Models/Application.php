<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'user_id', 'job_title', 'company_name', 'job_link', 'application_date',
        'stage', 'salary', 'interview_date'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
