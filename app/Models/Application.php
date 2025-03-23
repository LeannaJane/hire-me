<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'user_id', 'job_title', 'company_name', 'job_link', 'application_date',
        'stage', 'salary', 'interview_date'
    ];

    protected $appends = ['stage_name'];

    public function getStageNameAttribute()
    {
        return match ($this->stage) {
            1 => "Applied",
            2 => "Interview Stage 1",
            3 => "Interview Stage 2",
            4 => "Assessment",
            5 => "Offer",
            6 => "Accepted",
            7 => "No Response",
            8 => "Rejected",
            9 => "Rejected by Applicant",
            default => $this->stage
        };
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
